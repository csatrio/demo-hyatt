// The video tutorial: one entry per slide. img = a screenshot of demo-hyatt/screenshots (shown inside the app window);
// card = a title card {kicker, title, lines[]}; say = the voice-over (also the subtitle).
export const SLIDES = [
  { ch: 'Welcome', card: { kicker: 'Video tutorial', title: 'Grand Hyatt Singapore Demo', lines: ['The DesignerWorks desktop app for macOS and Windows', 'Documents, purchases, approvals and AI, in one app'] },
    say: 'Welcome to the Grand Hyatt Singapore demo. This tutorial walks through the DesignerWorks desktop app, for macOS and Windows, and every scenario of the demo.' },
  { ch: 'Welcome', card: { kicker: 'How it works', title: 'Your documents stay on your computer', lines: ['The app stores every document file next to itself, in hsg-files', 'It converts, previews and reads scanned pages on this computer', 'Each person sees only the documents they may see'] },
    say: 'The app keeps every document file on your own computer, in a folder called h s g files, next to the app. It converts the files, makes the previews, and even reads scanned pages right there.' },

  { ch: 'Install', card: { kicker: 'Install on a Mac', title: 'Unpack, then right-click Open', lines: ['1. Double-click GrandHyattDemo-macos-arm64.zip, for example in Documents', '2. Keep the folder together: do not drag the app into Applications', '3. First start: right-click "DesignerWorks Grand Hyatt Demo" and choose Open', '   (or System Settings, Privacy & Security, Open Anyway)'] },
    say: 'On a Mac, double-click the zip file to unpack it, for example into Documents. Keep the folder together. The first time, right-click the app and choose Open, then confirm.' },
  { ch: 'Install', card: { kicker: 'Install on Windows', title: 'Extract All, then run', lines: ['1. Right-click GrandHyattDemo-windows-x64.zip, Extract All, into Documents', '2. Start designerworks-hyattsg-demo.exe: no installer, no console window', '3. First start: "Windows protected your PC", More info, Run anyway', '4. Needs the Microsoft Edge WebView2 Runtime (Windows 11 has it)'] },
    say: 'On Windows, right-click the zip, choose Extract All, and start the program inside the folder. If SmartScreen warns you, choose More info, then Run anyway.' },
  { ch: 'Install', card: { kicker: 'The folder', title: 'What is inside', mono: ['GrandHyattDemo-<system>/', '  DesignerWorks Grand Hyatt Demo.app   (macOS)', '  designerworks-hyattsg-demo.exe       (Windows)', '  golden/       the demo’s starting documents', '  hsg-files/    this computer’s document files'] },
    say: 'Inside the folder you find the app, a golden folder with the starting documents, and the h s g files folder, where the app keeps this computer’s documents. Unpack it somewhere you can write.' },

  { ch: 'Before you start', card: { kicker: 'Before every audience', title: 'Sign in, then Reset demo', lines: ['Sign in as demo.admin: the bottom bar turns to ● AI Active', 'Reset demo, at the foot of the side menu: type RESET and confirm', 'The demo and this computer’s files return to the start together', 'Switch person with User menu, View as…'] },
    say: 'Before every audience, sign in as demo admin and press Reset demo at the foot of the side menu. Type RESET to confirm. The demo and the files on this computer return to the start together.' },
  { ch: 'Before you start', img: '09a-system-health.jpg', say: 'Then open System health in the side menu and check that no jobs have failed. It shows the background jobs, conversion failures and AI spend.' },
  { ch: 'Before you start', img: '09c-user-menu.jpg', say: 'To play another person, open the user menu and choose View as. One app window shows one person at a time.' },
  { ch: 'Before you start', img: '09d-view-as-dialog.jpg', say: 'Choose the person, for example Siti Rahman, the purchaser, and press Start viewing.' },
  { ch: 'Before you start', img: '09e-viewing-as.jpg', say: 'A gold banner shows whose view you are using. Stop viewing returns you to the administrator. Everything you do is audited under your own name.' },

  { ch: '1. One searchable library', img: '01a-library-search.jpg', say: 'Scenario one. Scattered documents become one searchable library. As Siti, open Documents, Library, type chiller and press Enter. Keyword and meaning search work together.' },
  { ch: '1. One searchable library', img: '01b-library-rosalind.jpg', say: 'Now the same search as Rosalind from Housekeeping. Her menu is shorter, and engineering and finance documents are neither listed nor counted.' },

  { ch: '2. Purchase end to end', img: '02a-purchases-list.jpg', say: 'Scenario two: a purchase from end to end. Purchases and projects lists the prepared demo purchases. Open the washer extractor.' },
  { ch: '2. Purchase end to end', img: '02b-purchase-flow.jpg', say: 'The Flow tab draws the steps of the purchase, with the current step highlighted.' },
  { ch: '2. Purchase end to end', img: '02c-question-card.jpg', say: 'On Questions, a card asks which quote should win. It lists the three quotes, lowest first, with the AI recommendation and its reason. Accept the recommendation.' },
  { ch: '2. Purchase end to end', img: '02d-inbox-approval.jpg', say: 'Switch to Marcus, the purchasing head. The approval request arrived in his inbox, and the bell counts up without a reload. Open the step.' },
  { ch: '2. Purchase end to end', img: '02e-approve-step.jpg', say: 'Marcus reads the quotes and presses Approve with my seal.' },
  { ch: '2. Purchase end to end', img: '02f-seal-timeline.jpg', say: 'His seal and the date are stamped on the timeline, and the purchase order is generated and linked.' },
  { ch: '2. Purchase end to end', img: '03a-director-approvals.jpg', say: 'The walk-in chiller costs eighty thousand Singapore dollars, above the threshold, so its award waits for Daniel, the General Manager, not Marcus. That is routing by amount.' },
  { ch: '2. Purchase end to end', img: '03b-combi-completed.jpg', say: 'The completed combi oven purchase shows the whole story: every step green, the seals, the purchase order, the old oven disposed and the new asset registered.' },

  { ch: '3. Approvals and the inbox', img: '03c-invoice-matched.jpg', say: 'Scenario three. As Grace, the Director of Finance, open the freezer invoice. Vendor, amount and order number all match the purchase order. Approve with the seal.' },
  { ch: '3. Approvals and the inbox', img: '03d-invoice-mismatch.jpg', say: 'The spa air handling unit is different: the invoice is eight percent above the order. The AI flags it as needing attention, and the human decides.' },

  { ch: '4. Audit and rollback', img: '04a-more-actions.jpg', say: 'Scenario four: governance. As Daniel, open the induction range purchase. The permit waits, and the old range is already marked disposed. Open More actions.' },
  { ch: '4. Audit and rollback', img: '04b-cancel-menu.jpg', say: 'Choose Cancel purchase.' },
  { ch: '4. Audit and rollback', img: '04c-cancel-dialog.jpg', say: 'The dialog explains that everything the process changed will be undone. Confirm with Cancel and undo its changes.' },
  { ch: '4. Audit and rollback', img: '04d-cancelled.jpg', say: 'The purchase is cancelled. The old range is active again, and the purchase order is gone.' },
  { ch: '4. Audit and rollback', img: '04e-audit-trail.jpg', say: 'As the administrator, the Audit trail shows every change: who, when, before and after, with a Restore button for each.' },

  { ch: '5. Project handover', img: '05a-kitchen-project.jpg', say: 'Scenario five: a project handover. As Benjamin, the engineer, open the main kitchen refit project. Its handover step waits for documents.' },
  { ch: '5. Project handover', img: '05b-handover-dropzone.jpg', say: 'Drag the ten files from the demo uploads folder, handover kitchen, onto the upload area. The files are stored and converted on this computer.' },
  { ch: '5. Project handover', img: '05c-handover-uploaded.jpg', say: 'When the ten files are uploaded, press Mark step complete. The step waits by itself for files that are still converting.' },
  { ch: '5. Project handover', img: '05d-handover-cards.jpg', say: 'Siti receives ten cards, one per file, each with the AI’s recommended document type. Accept all recommended, and the documents are typed and linked to the new assets.' },

  { ch: '6. AI sorting', img: '06a-bulk-upload.jpg', say: 'Scenario six: the messy dump. On Documents, Upload, drag the messy dump zip onto the upload area. By default, uploads skip approval, and the AI files every document into a folder by itself.' },
  { ch: '6. AI sorting', card: { kicker: 'Upload without approval', title: 'The AI files every document', lines: ['The app unpacks the zip and converts the 32 files on this computer', 'The AI puts each document in a folder, creating one when none fits', 'Unsure files are listed under "Files with low confidence"', 'Switch it off for the governed path: approval, then suggestions'] },
    say: 'The app unpacks and converts the thirty-two files on this computer, and the AI files them. Anything it was unsure about is listed under Files with low confidence, for a person to check.' },
  { ch: '6. AI sorting', img: '06b-sort-unsorted.jpg', say: 'The demo also holds thirty-two unsorted documents. On AI sorting, press Sort the unsorted documents.' },
  { ch: '6. AI sorting', img: '06c-sort-start.jpg', say: 'Choose the sorting mode and press Start sorting. Suggestions arrive over a minute or two.' },
  { ch: '6. AI sorting', img: '06d-sorting-suggestions.jpg', say: 'Each file gets a suggested folder with a confidence. Accept all suggestions to sort them in one click.' },

  { ch: '7. Ask the knowledge base', img: '07a-assistant.jpg', say: 'Scenario seven: ask the knowledge base. In the Assistant, ask which vendors quoted for the walk-in chiller. The answer cites the documents it used.' },
  { ch: '7. Ask the knowledge base', img: '07b-assistant-rosalind.jpg', say: 'Rosalind asks the same question and gets no figures: the assistant only reads what she may read.' },

  { ch: '8. Management view', img: '08a-executive.jpg', say: 'Scenario eight: the management view. The executive dashboard shows inventory by category and location, cost, leasing and open workflows.' },
  { ch: '8. Management view', img: '08b-ai-reviewed.jpg', say: 'Under AI reviewed, every pending approval carries an AI mark and reason. Disagree, and the correction guides the AI next time.' },

  { ch: '9. The presenter’s view', img: '09b-open-work.jpg', say: 'Scenario nine. As demo admin, Everyone lists all open work, with who it waits on. The override buttons move the story along without signing out.' },

  { ch: 'D. The desktop app', card: { kicker: 'D1', title: 'Your files stay on this computer', lines: ['Settings (bottom bar), Document files:', '"Kept on this computer in … hsg-files (file helper idle)"', 'Uploads are stored and converted here', 'Preview and Open original read the local file'] },
    say: 'Desktop part one. Open Settings in the bottom bar. Document files shows where this computer keeps the files. Uploads are stored and converted here, and previews read the local file.' },
  { ch: 'D. The desktop app', card: { kicker: 'D2', title: 'A scanned manual, read offline', lines: ['Upload demo-uploads/scanned-washer-manual.pdf', '"Read images and scanned pages (AI vision)" stays off', 'Text recognition on this computer: offline, free, about 1 s per page', 'Search "fault codes" or ask the Assistant about daily checks'] },
    say: 'Desktop part two. Upload the scanned washer manual. Its pages are only pictures, yet the app reads them on this computer, offline and free, in about a second per page. Search for fault codes to find it.' },
  { ch: 'D. The desktop app', card: { kicker: 'D3', title: 'Reset demo: everything, together', lines: ['Reset demo, type RESET, confirm', '"Syncing demo files…" while hsg-files is restored from golden', 'Uploads since the last reset are gone, everywhere', 'Sign in again: back at the start'] },
    say: 'Desktop part three. Reset demo puts everything back at once. The app restores its files from the golden copy, and your uploads since the last reset are gone. Sign in again, and you are back at the start.' },

  { ch: 'P1. Workflows', img: 'p1a-workflows.jpg', say: 'Second part. P one: change a workflow without a programmer. As Marcus, open Workflows and press New workflow.' },
  { ch: 'P1. Workflows', img: 'p1b-wizard-template.jpg', say: 'Pick the Simple approval template.' },
  { ch: 'P1. Workflows', img: 'p1c-wizard-name.jpg', say: 'Give the workflow a name and press Next.' },
  { ch: 'P1. Workflows', img: 'p1d-wizard-approver.jpg', say: 'Choose who approves, with an amount band at twenty-five thousand Singapore dollars.' },
  { ch: 'P1. Workflows', img: 'p1e-try-it.jpg', say: 'Try it with thirty thousand: the simulation names the approvers the request would reach.' },
  { ch: 'P1. Workflows', img: 'p1f-editor.jpg', say: 'In the editor, change the limit, try it again, compare the versions, and send it for publishing. Daniel publishes it.' },

  { ch: 'P2. Approvals and override', img: 'p2a-approvals.jpg', say: 'P two: one place for approvals. Marcus sees everything that waits for him, with filters, a pipeline and a health view.' },
  { ch: 'P2. Approvals and override', img: 'p2b-override-select.jpg', say: 'The override, live. As demo admin, under Everyone, select the chiller award that waits for Daniel.' },
  { ch: 'P2. Approvals and override', img: 'p2c-override-reason.jpg', say: 'Give a reason, for example: the director is travelling and the award is needed today. Press Approve as override.' },
  { ch: 'P2. Approvals and override', img: 'p2d-override-confirm.jpg', say: 'Confirm once more.' },
  { ch: 'P2. Approvals and override', img: 'p2e-override-timeline.jpg', say: 'The purchase timeline shows the Override pill, with the reason, for everyone to see.' },

  { ch: 'P3. Assistant on every page', img: 'p3a-assistant-dock.jpg', say: 'P three: the assistant on every page. Its suggestions change with the page you are on.' },
  { ch: 'P3. Assistant on every page', img: 'p3b-assistant-answer.jpg', say: 'Ask, for example, what is waiting for me. Answers take five to twenty seconds, with a status line.' },

  { ch: 'P4. A form from a sentence', img: 'p4a-forms.jpg', say: 'P four: a form from a sentence. On Forms, press Describe a form.' },
  { ch: 'P4. A form from a sentence', img: 'p4b-form-describe.jpg', say: 'Describe the form you need, for example a daily minibar check per room. The AI drafts it in about ten seconds, ready to check and save.' },

  { ch: 'P5. Budget and petty cash', img: 'p5a-budget.jpg', say: 'P five: budget. As Grace, the budget page shows spent, committed and surplus by department. IT is over budget.' },
  { ch: 'P5. Budget and petty cash', img: 'p5b-budget-drilldown.jpg', say: 'Click a department for the drill-down.' },
  { ch: 'P5. Budget and petty cash', img: 'p5c-budget-import.jpg', say: 'Import budget previews every row, with its problems, before anything is saved.' },

  { ch: 'P6. Trust', img: 'p6a-history.jpg', say: 'P six: small things that build trust. The History tab says in words who changed what.' },
  { ch: 'P6. Trust', img: 'p6b-archived.jpg', say: 'And administrators can restore archived documents from the Library.' },

  { ch: 'Wrap-up', card: { kicker: 'Good to know', title: 'If something goes wrong', lines: ['AI steps take 5 to 60 seconds: start them first, then talk', 'Do not quit the app while uploads convert', 'Data looks wrong? Reset demo as demo.admin', '"AI Off" in the bottom bar: check the internet connection'] },
    say: 'AI steps take from five seconds to a minute, so start them first, then talk. If the data looks wrong, reset the demo. If the bottom bar says AI Off, check the internet connection.' },
  { ch: 'Wrap-up', card: { kicker: 'Grand Hyatt Singapore Demo', title: 'Thank you', lines: ['Logins and every scenario: DEMO-GUIDE.md and DEMO.pdf', 'Files to upload: the demo-uploads folder'] },
    say: 'That is the whole demo. The logins and every scenario are in the demo guide. Thank you for watching.' },
];
