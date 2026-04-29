# 📊 Student Scoreboard - React Application

A modern and interactive **Student Scoreboard** built with React (Vite) as part of **Web Development II Lab Assignment 3**.

## 🎯 Objective
To demonstrate component-based architecture, state management, props drilling, conditional rendering, and dynamic UI updates in React.

## ✨ Features Implemented

- ✅ Clean and modern user interface (Different from the sample)
- ✅ Responsive design with gradient background
- ✅ Add new students using a form
- ✅ Display students in a well-styled table
- ✅ Dynamically update student scores (inline editing)
- ✅ Pass/Fail status with color coding (Green = Pass, Red = Fail)
- ✅ Score threshold: **Pass ≥ 40**, **Fail < 40**
- ✅ Form clears automatically after adding a student
- ✅ Pure CSS styling (No Tailwind)
- ✅ Fully functional components with proper props and state management

## 🛠️ Components Structure

- **Header** – Application title and description
- **AddStudentForm** – Form to add new students (name + score)
- **StudentTable** – Displays all students in tabular format
- **StudentRow** – Reusable row component for each student

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/student-scoreboard.git
cd student-scoreboard
2. Install dependencies
Bashnpm install
3. Start the development server
Bashnpm run dev
Open http://localhost:5173 to view the application.
📁 Project Structure
textsrc/
├── components/
│   ├── Header.jsx
│   ├── AddStudentForm.jsx
│   ├── StudentTable.jsx
│   └── StudentRow.jsx
├── App.jsx
└── App.css
🧩 Technologies Used

React (with Vite)
JavaScript (JSX)
Pure CSS (No external libraries or Tailwind)
Functional Components + Hooks (useState)

📋 Assignment Requirements Fulfilled

Used functional components only
Proper state management in App.jsx
Data passed using props
Conditional rendering for Pass/Fail status
Dynamic score update with real-time UI reflection
Clean and reusable component architecture

🎨 UI Highlights

Modern card-based layout
Smooth hover effects and focus states
Clear visual distinction between Pass and Fail
Responsive design (works well on mobile and desktop)


Submitted for:
Web Dev II (Advanced JS & React)
Lab Assignment 3
Happy Coding! 🎯
