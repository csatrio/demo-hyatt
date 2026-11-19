import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { SLIDES } from './script.mjs';
const require = createRequire('/Users/csatrio/rust-dev/adaptif-hyattsg-prototype/x.js');
const { chromium } = require('playwright');
const SHOTS = '/Users/csatrio/Documents/demo-hyatt/screenshots';
const OUT = process.argv[2];
const only = process.argv[3] ? Number(process.argv[3]) : null;
const W = join(OUT, 'work');
mkdirSync(W, { recursive: true });
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const css = `*{box-sizing:border-box}body{margin:0;width:1920px;height:1080px;overflow:hidden;font-family:-apple-system,"SF Pro Text","Helvetica Neue",sans-serif;
background:radial-gradient(ellipse at 30% 20%,#2a2620 0%,#16171b 55%,#0e0f12 100%);color:#f3f0ea;position:relative}
.ch{position:absolute;left:320px;top:14px;font-size:22px;letter-spacing:.06em;color:#c9a96b;text-transform:uppercase;font-weight:600}
.no{position:absolute;right:320px;top:16px;font-size:18px;color:#8b8780}
.win{position:absolute;left:320px;top:52px;width:1280px;border-radius:11px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.08)}
.tb{height:34px;background:linear-gradient(#ececec,#dcdcdc);display:flex;align-items:center;justify-content:center;position:relative;color:#3a3a3a;font-size:14px;font-weight:600}
.tl{position:absolute;left:14px;display:flex;gap:8px}.tl i{width:12px;height:12px;border-radius:50%;display:block}
.win img{display:block;width:1280px;height:800px}
.st{height:28px;background:#fff;border-top:1px solid #e3e0da;display:flex;align-items:center;gap:16px;padding:0 14px;font-size:13px;color:#2b2b2b}
.st .who{flex:1}.dot{display:inline-block;width:9px;height:9px;border-radius:50%;background:#1f8a4c;margin-right:8px}.lk{color:#1d5fb8}
.cap{position:absolute;left:200px;right:200px;bottom:0;height:166px;display:flex;align-items:center;justify-content:center;text-align:center;font-size:31px;line-height:1.35;color:#fbf8f2;text-shadow:0 2px 6px rgba(0,0,0,.6)}
.card{position:absolute;left:260px;right:260px;top:150px}
.kick{font-size:28px;color:#c9a96b;letter-spacing:.08em;text-transform:uppercase;font-weight:600}
.title{font-size:76px;font-weight:700;margin:18px 0 40px;line-height:1.1}
.lines div{font-size:36px;line-height:1.5;color:#e6e1d8;padding-left:34px;position:relative}.lines div:before{content:"";position:absolute;left:0;top:24px;width:12px;height:12px;border-radius:50%;background:#c9a96b}
pre{font:32px/1.5 "SF Mono",Menlo,monospace;color:#e6e1d8;background:rgba(255,255,255,.05);padding:24px 30px;border-radius:12px;border:1px solid rgba(255,255,255,.08);margin:0}
.brand{position:absolute;left:260px;bottom:200px;font-size:20px;color:#8b8780}
.card + .cap{border-top:1px solid rgba(255,255,255,.08)}`;
function html(s, i) {
  const head = `<div class="ch">${esc(s.ch)}</div><div class="no">${i + 1} / ${SLIDES.length}</div>`;
  let mid;
  if (s.img) {
    mid = `<div class="win"><div class="tb"><div class="tl"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i></div>DesignerWorks: Grand Hyatt Singapore Demo</div>
<img src="file://${SHOTS}/${s.img}"><div class="st"><span class="who"><span class="dot"></span>AI Active</span><span class="lk">Settings</span><span class="lk">About</span></div></div>`;
  } else {
    const c = s.card;
    const body = c.mono ? `<pre>${esc(c.mono.join('\n'))}</pre>` : `<div class="lines">${c.lines.map((l) => `<div>${esc(l)}</div>`).join('')}</div>`;
    mid = `<div class="card"><div class="kick">${esc(c.kicker)}</div><div class="title">${esc(c.title)}</div>${body}</div><div class="brand">DesignerWorks · Grand Hyatt Singapore Demo</div>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${head}${mid}<div class="cap">${esc(s.sub ?? s.say)}</div></body></html>`;
}
const dur = (f) => Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString());
const b = await chromium.launch();
const page = await b.newPage({ viewport: { width: 1920, height: 1080 } });
const list = [];
const chapters = [];
let t = 0;
for (const [i, s] of SLIDES.entries()) {
  if (only !== null && i !== only) continue;
  const n = String(i).padStart(2, '0');
  const png = join(W, `${n}.png`), aiff = join(W, `${n}.aiff`), mp4 = join(W, `${n}.mp4`);
  if (s.img && !existsSync(join(SHOTS, s.img))) throw new Error(`missing ${s.img}`);
  writeFileSync(join(W, `${n}.html`), html(s, i));
  await page.goto(`file://${join(W, `${n}.html`)}`, { waitUntil: 'load' });
  await page.screenshot({ path: png });
  execFileSync('say', ['-v', 'Samantha', '-r', '178', '-o', aiff, s.say]);
  const a = dur(aiff);
  const d = +(a + 1.2).toFixed(2);
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-loop', '1', '-framerate', '30', '-i', png, '-i', aiff,
    '-filter_complex', `[0:v]fade=t=in:st=0:d=0.3,fade=t=out:st=${(d - 0.3).toFixed(2)}:d=0.3,format=yuv420p[v];[1:a]adelay=450|450,apad,aresample=48000,aformat=channel_layouts=stereo[a]`,
    '-map', '[v]', '-map', '[a]', '-t', String(d), '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-tune', 'stillimage', '-r', '30',
    '-c:a', 'aac', '-b:a', '128k', mp4]);
  list.push(`file '${mp4}'`);
  if (!chapters.length || chapters[chapters.length - 1].title !== s.ch) chapters.push({ title: s.ch, start: t });
  t += d;
  process.stdout.write(`${n} ${d}s\n`);
}
await b.close();
if (only !== null) process.exit(0);
writeFileSync(join(W, 'list.txt'), list.join('\n') + '\n');
const meta = [';FFMETADATA1', 'title=Grand Hyatt Singapore Demo: video tutorial', 'artist=DesignerWorks'];
chapters.forEach((c, k) => {
  const end = k + 1 < chapters.length ? chapters[k + 1].start : t;
  meta.push('[CHAPTER]', 'TIMEBASE=1/1000', `START=${Math.round(c.start * 1000)}`, `END=${Math.round(end * 1000)}`, `title=${c.title}`);
});
writeFileSync(join(W, 'chapters.txt'), meta.join('\n') + '\n');
execFileSync('ffmpeg', ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', join(W, 'list.txt'), '-i', join(W, 'chapters.txt'),
  '-map', '0', '-map_metadata', '1', '-map_chapters', '1', '-c', 'copy', '-movflags', '+faststart', join(OUT, 'DEMO-VIDEO.mp4')]);
writeFileSync(join(OUT, 'chapters.md'), chapters.map((c) => `${new Date(c.start * 1000).toISOString().slice(14, 19)} ${c.title}`).join('\n') + '\n');
console.log(`total ${(t / 60).toFixed(1)} min, ${chapters.length} chapters`);
