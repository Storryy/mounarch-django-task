 # Mounarch Task - Django File Viewer

This project was created as a technical assessment for **Mounarch**. It's a Django-based web application that allows users to select and view .txt files with a clean, professional interface.

## Project Requirements

The task was to create a Django-based web page with the following functionality:

### Frontend Requirements
- **Professional Design**: Clean and intuitive interface
- **Navbar**: Navigation bar at the top
- **Footer**: Footer section at the bottom
- **Main Body**: 
  - Dropdown menu listing multiple .txt filenames
  - "View" button placed beside the dropdown

### Functional Requirements
- **Initial State**: "View" button disabled until file selection
- **File Selection**: Button becomes clickable when file is selected
- **File Viewing**: 
  - Search for selected .txt file in local system
  - Open file in system's Notepad application (if found locally)
  - If not found locally, check Google Drive folder
- **File Not Found**: 
  - Modal popup with "file not available locally" message
  - Download button to get file from Google Drive folder
- **Google Drive Integration**: Publicly accessible folder containing .txt files

## Implementation Notes

### Security Limitation
Due to browser security restrictions, **opening files directly in the system's Notepad application is not possible** from a web application. Instead, the implementation downloads the selected file to the user's system, allowing them to open it manually with their preferred text editor.

### Design Philosophy
The UI has been kept **clean and simple** - nothing too fancy. The focus is on functionality and user experience rather than complex visual elements.

### Features Implemented
- ✅ Professional navbar and footer
- ✅ Dropdown menu with .txt file options
- ✅ Disabled/enabled "View" button based on selection
- ✅ File download functionality
- ✅ Modal popup for file not found scenarios
- ✅ Responsive design
- ✅ Clean and intuitive interface

## How to Run the Project

### Prerequisites
- Python 3.8 or higher
- Django 4.0 or higher

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mounarch-task-final
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run database migrations**
   ```bash
   python manage.py migrate
   ```

4. **Start the development server**
   ```bash
   python manage.py runserver
   ```

5. **Access the application**
   - Open your browser and navigate to `http://127.0.0.1:8000/`
   - The main page will display the file viewer interface

### Project Structure
```
├── manage.py
├── requirements.txt
├── static/
│   ├── css/
│   ├── js/
│   └── files/          # Local .txt files
├── templates/
│   └── index.html      # Main page template
└── fileviewer/         # Django app
    ├── views.py
    ├── urls.py
    └── models.py
```

## Usage

1. **Select a file** from the dropdown menu
2. **Click "View"** button (becomes enabled after selection)
3. **File handling**:
   - If file exists locally: Downloads immediately
   - If file not found: Modal appears with download option from Google Drive

## Technical Stack

- **Backend**: Django
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Bootstrap (for responsive design)
- **File Storage**: Local filesystem + Google Drive integration

## Notes

- All .txt files are stored in the `static/files/` directory
- Google Drive integration provides backup file access
- Modal popups enhance user experience for error handling
- Responsive design ensures compatibility across devices 