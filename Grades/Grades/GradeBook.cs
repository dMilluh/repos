using System;
using System.Collections.Generic;
using System.Text;

namespace Grades
{
    class GradeBook
    {

        public GradeBook()
        {

        }
        public void AddGrade(float grade)
        {
            grades.Add(grade);
        }

        List<float> grades = new List<float>();
    }
}
