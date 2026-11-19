# DEMO-VIDEO.mp4: how it is made

- `script.mjs`: one entry per slide. Each slide is either a screenshot from `../screenshots`, shown inside the app window, or a title card. Its `say` text is both the narration and the subtitle.
- `render.mjs`: builds the video.
  - Playwright draws each 1920x1080 slide.
  - macOS `say` (voice Samantha) records the narration.
  - ffmpeg makes one clip per slide, joins them and adds chapter markers.

Re-render after changing the script (needs ffmpeg and the Playwright of the web repo checkout):

    node video-src/render.mjs <work dir>        # writes <work dir>/DEMO-VIDEO.mp4 and chapters.md
    node video-src/render.mjs <work dir> 6      # renders slide 7 only, to check it

Chapters:

    00:00 Welcome
    00:22 Install
    00:56 Before you start
    01:39 1. One searchable library
    01:59 2. Purchase end to end
    03:03 3. Approvals and the inbox
    03:23 4. Audit and rollback
    03:59 5. Project handover
    04:36 6. AI sorting
    05:21 7. Ask the knowledge base
    05:37 8. Management view
    05:55 9. The presenter’s view
    06:05 D. The desktop app
    06:42 P1. Workflows
    07:16 P2. Approvals and override
    07:47 P3. Assistant on every page
    08:00 P4. A form from a sentence
    08:15 P5. Budget and petty cash
    08:32 P6. Trust
    08:43 Wrap-up
