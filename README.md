# Edurelate [ SCHOOL REGISTRY ]

A simple and efficient way for student to keep track of their courses, their lecturers and maybe other students. Ever felt like you don't have a proper overview of your course or lecturer?
<b>Edurelate</b> plans to solve this problem and erase the bar in between <i>YOU</i>, your <i>lecturers</i> and your <i>courses</i>.

---

### Highlights

- School Friendly
- Healthy student relationship
- Track Lecturers and Courses

## THE IDEA

**_Student Perspective_**

- Student logs into the website
- Student views the courses with the respective lecturer(s) for that semester
- Student checks review by past student.

**_Lecturer/admin Perspective_**

- Lecturer logs into the website
- Lecturer creates courses with their name saved with it.

## FEATURES

- Create students and enroll them in courses by course name
- Course management (TODO: list what yours can do)
- Request validation middleware
- Clear 404 errors listing every course that wasn't found

## TECH STACK & TOOLS

- Node.js + Express
- MongoDB + Mongoose
- REACT (??? probably) - FRONTEND

## EXTERNAL LIBRARIES

- zod
- JWT & Cookies
- OTP via email

## GETTING STARTED

### 1. Clone and Install

```bash
git clone https://github.com/Ade12Donald/School-Registry.git
cd School-Registry
npm install
```

### 2. Set up environment variables

Create a `.env` file in the project root:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

(TODO: match these names to what your `index.js` reads)

### 3. Run the server

```bash
npm start
```

(Note: `node index.js` / `npm run dev`, whichever you use)

## API Endpoints

| Role           | Method |         Route          | Description                               |
| -------------- | ------ | :--------------------: | ----------------------------------------- |
| Student        | POST   | /portal/student/signUp | Create student Account                    |
| Student        | GET    | /portal/student/me/:id | Get Student Personal Data                 |
| Student        | PATCH  | /portal/student/me/:id | Update Student Personal Data              |
| Student        | DELETE | /portal/student/me/:id | Delete Student Personal Data              |
|                |        |                        |                                           |
| Lecturer/admin | POST   | /portal/courses/create | Create Course (done by lecturer or admin) |

## Project Structure

```
controllers/   request handlers
middleware/    validation
models/        Mongoose models
routers/       route definitions
schema/        data schemas
utils/         helpers (NameToID)
```

## Author

<img src="https://images.weserv.nl/?url=github.com/Ade12Donald.png&w=100&h=100&fit=cover&mask=circle" width="30" align="absmiddle" alt="Donald">&nbsp;&nbsp;<a href="https://github.com/Ade12Donald"><b>Donald Adebowale</b></a>
