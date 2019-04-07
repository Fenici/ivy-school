# APIs

## Assignment

- GET

/assignment/:id

- POST

/assignment
Body:
{
name:"",
title:"",
content:"",
criteria:"",
belongTo:""
}

- PUT

/assignment/:id
Body:
{
id:"",
name:"",
title:"",
content:"",
criteria:"",
belongTo:""
}

- DELETE

  /assignment/:id

## Admin

- GET
  /admin/:id
- POST
  body:{
  Name
  Title
  Avatar
  Course
  Assignment
  Student
  Teacher

}
/admin

- PUT
  /admin/:id
  body:{
  Name
  Title
  Avatar
  Course
  Assignment
  Student
  Teacher

}

- DELETE
  /admin/:id

## Teacher

- GET
  /student/:id
- POST
  /teacher
  body{
  Name
  Title
  Avatar
  Course
  Grade
  Comments
  Assignment
  Announcement
  }

- PUT

/teacher/:id
body{
Name
Title
Avatar
Course
Grade
Comments
Assignment
Announcement
}

- DELETE
  /teacher/:id
  body{
  Assignment
  Announcement

  }

## Student

- GET
  /student/:id
- POST
  /student
  body{
  avatar:static file,
  name:String,
  email:String,
  enrollments:bool
  assignments:{
  assignment:id
  }

}

- PUT
  /student/:id
  body{
  avatar:static file,
  avatar:static file,
  name:String,
  email:String,
  enrollments:bool
  assignments:{
  assignment:id
  }

}

- DELETE
  /student/:id

## Course

- GET
  /course/:id
- POST
  /course
  body:{
  Name
  numberOfStudents
  censusDate
  tuitionFee
  teachers
  assignment:{
  assignment:id
  }
  }

- PUT
  /course/:id
  body:{
  name
  numberOfStudents
  censusDate
  tuitionFee
  teachers
  assignment:{
  assignment:id
  }
  }

* DELETE
  /course/:id
