# Mounarch Task - File Viewer

A simple Django web app for viewing .txt files. Made for Mounarch's technical assessment.

## What it does

- Shows a dropdown with .txt files
- Has a "View" button that's disabled until you pick a file
- Downloads the file when you click "View" (couldn't open in Notepad due to browser security)
- If file isn't found locally, shows a modal to download from Google Drive

## The Challenge

The original task wanted files to open in Notepad, but browsers won't let you do that for security reasons. So instead, the file gets downloaded and you can open it yourself.

## UI Design

Kept it clean and simple - nothing fancy. Just a navbar, main content area, and footer.

## How to run

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run migrations:
   ```bash
   python manage.py migrate
   ```

3. Start the server:
   ```bash
   python manage.py runserver
   ```

4. Go to `http://127.0.0.1:8000/`

That's it! Pick a file from the dropdown and click "View" to download it. 