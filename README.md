# Grand Hyatt Singapore Demo: DesignerWorks desktop app

The Grand Hyatt Singapore Demo runs in the **DesignerWorks desktop app** for macOS and Windows. The demo is given from the desktop app only.

The app keeps the document files on your computer. It converts them, makes the thumbnails and reads scanned pages there too.

Login details and the demo scenarios are in [DEMO-GUIDE.md](DEMO-GUIDE.md) (also as [DEMO.pdf](DEMO.pdf)).

## What is in this folder

| File | For |
|---|---|
| `GrandHyattDemo-macos-arm64.zip` | macOS, Apple silicon (M1 or later) |
| `GrandHyattDemo-windows-x64.zip` | Windows 10 and 11, 64-bit |
| `DEMO-GUIDE.md`, `DEMO.pdf` | how to run the demo: logins, scenarios, expected waits |
| `demo-uploads/` | files to upload during the demo: `handover-kitchen/` (ten handover files), `messy-dump.zip` (32 mixed files), `scanned-washer-manual.pdf` (a scanned manual with no text layer) |
| `screenshots/` | the figures of the guide |
| `Archive.zip` | the guide, the PDF, the screenshots and `demo-uploads/` in one file (no apps) |

Each app zip unpacks to one folder:

```
GrandHyattDemo-<system>/
  DesignerWorks Grand Hyatt Demo.app     macOS: the app
  designerworks-hyattsg-demo.exe         Windows: the app
  golden/                                the demo's starting documents (read-only copy)
  hsg-files/                             the document files of this computer (filled at the first start)
```

Everything the app needs is inside the app itself, including its file helper. There is nothing else to install.

- **Keep the folder together.** The app keeps its documents in `hsg-files/` next to it.
- **Unpack it somewhere you can write**, such as the Desktop or Documents. Do not unpack it into a read-only place or a cloud-synced folder that changes files behind the app's back.

The apps are not signed with a developer certificate, so your computer asks you to confirm the first start (see below). Only run them if they came from the demo team.

## macOS

1. Unpack `GrandHyattDemo-macos-arm64.zip` (double-click it), for example in **Documents**. Keep the folder `GrandHyattDemo-macos-arm64` as it is: do not drag the app out of it into Applications.
2. First start only: **right-click** `DesignerWorks Grand Hyatt Demo.app` and choose **Open**, then click **Open** in the dialog.
   - If macOS only says the app "cannot be opened because the developer cannot be verified", go to **System Settings -> Privacy & Security**, scroll to the message about the app and click **Open Anyway**.
3. Sign in with a login from [DEMO-GUIDE.md](DEMO-GUIDE.md).

Later starts: double-click the app as usual. No Terminal window opens. The first start takes a few seconds longer while the app unpacks its file helper.

## Windows

1. Right-click `GrandHyattDemo-windows-x64.zip` -> **Extract All...** and pick a folder you can find, for example `Documents`. Do not run the app from inside the zip.
2. Open the folder and start `designerworks-hyattsg-demo.exe`. There is no installer and no console window.
3. First start only: Windows SmartScreen may show "Windows protected your PC". Click **More info**, then **Run anyway**.
4. The app needs the **Microsoft Edge WebView2 Runtime**. Windows 11 and up-to-date Windows 10 have it already. If the window does not open, install the Evergreen Runtime from Microsoft's WebView2 page and start the app again.
5. Sign in with a login from [DEMO-GUIDE.md](DEMO-GUIDE.md).

## Using the app

- **The window:** the demo's pages on top. Along the bottom:
  - **AI Active** (green) while you are signed in and connected;
  - **Settings**: theme, offline copies, sign out, and **Document files**, which shows where this computer keeps the files and how much file work is waiting;
  - **About**: the versions.
- **Files stay on this computer:**
  - Uploaded documents are stored in `hsg-files/`. The app converts them to text, makes the thumbnails and splits them for search on this computer.
  - Opening, previewing and downloading a document reads it from `hsg-files/`.
  - Each person sees only the documents they are allowed to see.
- **Scanned pages:**
  - By default, a scanned PDF is read by text recognition (OCR) on this computer. This is offline, free, and takes about a second per page.
  - The upload option **Read images and scanned pages (AI vision, costs more)** sends the pages to the AI instead.
- **Opening and downloading:** files you download go through the normal Save dialog. "Open original" opens a read-only copy in your default program; the copies are deleted when the app quits.
- **Offline:** without a connection, the app shows the last copy it saved for the signed-in user, read-only. Approving, uploading and the AI need the connection.
- **Notifications** appear as normal system notifications.

## Reset demo

- **Who can reset:** `demo.admin` or `admin`, with **Reset demo** at the foot of the side menu. Type `RESET` to confirm.
- **What it does:** it puts the demo **and** this computer's files back to the starting state together.
  - Everything changed since the last reset is discarded: uploads, approvals, new workflows.
  - Everyone is signed out.
  - The app shows a short "Syncing demo files..." notice while it restores `hsg-files/` from `golden/`.
- **Other computers:** a computer running the app when someone else resets the demo notices at its next connection and restores its own files the same way.
- **If the app says "Update the desktop app":** this copy of the app is older than the demo data. Unpack the newest zip.

To remove everything the app keeps:

1. Quit the app.
2. Delete the unpacked folder.
3. Delete the app's data folder. It holds settings, offline copies and the unpacked file helper:
   - macOS: `~/Library/Application Support/com.csatrio.hyattsg-demo`
   - Windows: `%APPDATA%\com.csatrio.hyattsg-demo` and `%LOCALAPPDATA%\com.csatrio.hyattsg-demo`

## Problems

| Problem | What to do |
|---|---|
| Mac: "cannot be opened" | Right-click -> Open, or System Settings -> Privacy & Security -> Open Anyway |
| Windows: "Windows protected your PC" | More info -> Run anyway |
| Windows: the window does not open | Install the WebView2 Runtime (Windows step 4) |
| "Cannot connect" at sign-in | Check the internet connection, wait a minute (a reset takes about a minute) and try again |
| "This file is not on this computer" | The document was uploaded from another computer, and its file lives there. The demo data opens on every computer; an upload opens on the computer it was uploaded from |
| Settings -> Document files says the folder cannot be written | The folder was unpacked somewhere read-only (or the app runs from inside the zip): unpack it to Documents and start it from there |
| A scanned page has no text | Upload it again with **Read images and scanned pages** on (the AI reads it), or check that the scan is readable |

Version: 0.1.0. Web `4bb8843c`, desktop `5e4c907`.
