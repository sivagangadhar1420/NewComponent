import { Inject, Injectable } from '@angular/core';


// export class StudentSubjects{

// }
// export class StudentAddress{

// }
@Injectable()
export class StudentSubjects{

}

@Injectable()
export class StudentAddress{

}

@Injectable()
export class Student
{
    // subjects:string;
    // address:string;
    subjects:StudentSubjects;
    address:StudentAddress;

    // constructor(@Inject(StudentSubjects) subjects:StudentSubjects,@Inject(StudentAddress) address:StudentAddress){
        constructor(subjects:StudentSubjects,address:StudentAddress){
    
    this.subjects = subjects;
        this.address = address;
    }

}

@Injectable()
export class StudentChild extends Student{
    test:string = "dummyTest";
}



