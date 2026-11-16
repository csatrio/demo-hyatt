# Grand Hyatt Singapore Demo: desktop app

The Grand Hyatt Singapore Demo as a native app for macOS and Windows. The app shows the demo website in its own window and connects to the demo server:

**Server: https://demo.adaptif.co.id**

Login details and the demo scenarios are in [DEMO-GUIDE.md](DEMO-GUIDE.md).

## What is in this folder

| File | For |
|---|---|
| `hyatt-sg-demo-mac.app` | macOS, Apple silicon (M1 or later) only |
| `hyatt-sg-demo-win.exe` | Windows 10 and 11 (64-bit) |
| `DEMO-GUIDE.md` | how to run the demo, logins, scenarios |
| `DEMO.pdf` | the demo as a PDF |
| `demo-uploads/` | files to upload during the demo |

The apps are not signed with a developer certificate, so your computer will ask you to confirm the first start (see below). Only run them if they came from the demo team.

## macOS

1. Copy `hyatt-sg-demo-mac.app` to **Applications** (or any folder you like).
2. First start only: **right-click** the app and choose **Open**, then click **Open** in the dialog. If macOS only shows "cannot be opened because the developer cannot be verified", go to **System Settings -> Privacy & Security**, scroll down to the message about the app and click **Open Anyway**.
3. The first-start screen asks for a server. Enter:
   - **Name:** Grand Hyatt Demo (any name works)
   - **Address:** `https://demo.adaptif.co.id`
4. Click save, pick the server, and sign in with a login from [DEMO-GUIDE.md](DEMO-GUIDE.md).

Later starts open the app straight into the demo; double-click it as usual.

## Windows

1. Copy `hyatt-sg-demo-win.exe` to a folder you can find, for example the Desktop or `Documents\demo-hyatt`. There is no installer: the file runs as it is.
2. First start only: Windows SmartScreen may show "Windows protected your PC". Click **More info**, then **Run anyway**.
3. The app needs **Microsoft Edge WebView2 Runtime**. Windows 10 (version 1809 and later) and Windows 11 normally have it already. If the app does not open, install the Evergreen Runtime from Microsoft's WebView2 page and start the app again.
4. The first-start screen asks for a server. Enter:
   - **Name:** Grand Hyatt Demo (any name works)
   - **Address:** `https://demo.adaptif.co.id`
5. Click save, pick the server, and sign in with a login from [DEMO-GUIDE.md](DEMO-GUIDE.md).

## Using the app

- The app is the same website as https://demo.adaptif.co.id, in its own window. Everything in [DEMO-GUIDE.md](DEMO-GUIDE.md) works the same way.
- Files you download are saved through the normal Save dialog. Files you open with "Open original" are copied to a temporary folder that is cleared when the app quits.
- If the server cannot be reached, the app shows the last copy it saved for the signed-in user (read-only). Actions such as approving or uploading need the connection.
- Notifications appear as the normal system notifications.

## Signing out and resetting

- **Sign out:** user menu (top right) -> Sign out. This also deletes the offline copy kept for that user.
- **Start over:** sign out, then quit the app. To remove all app data, quit the app and delete its data folder (it holds the server list, settings and the offline copies).
- Each login in the demo has the same password, listed in DEMO-GUIDE.md.

## Problems

| Problem | What to do |
|---|---|
| Mac: "cannot be opened" | Right-click -> Open, or System Settings -> Privacy & Security -> Open Anyway |
| Windows: "Windows protected your PC" | More info -> Run anyway |
| Windows: window does not open | Install the WebView2 Runtime (step 3 above) |
| "Cannot connect" or a blank page | Check the internet connection, then open https://demo.adaptif.co.id in a browser to confirm the site is up |
| Wrong server in the list | Remove the profile in the server picker and add it again with the address above |

Version: 0.1.0, web pin `c2d8e9a`.
