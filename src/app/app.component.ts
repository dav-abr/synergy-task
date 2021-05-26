import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'synergy-task';
  filesJson = [
    {
      path: 'univercity',
      modificationDate: '2019-01-01',
      type: 'folder'
    },
    {
      path: 'univercity/faculties',
      modificationDate: '2018-10-10',
      type: 'folder'
    },
    {
      path: 'univercity/faculties/mathematics/subjects.txt',
      modificationDate: '2018-08-08',
      type: 'file',
      size: 1
    },
    {
      path: 'univercity/faculties/mathematics/doctors.doc',
      modificationDate: '2018-09-09',
      type: 'file',
      size: 1.25
    },
    {
      path: 'univercity/faculties/phisics/subjects.txt',
      modificationDate: '2018-10-10',
      type: 'file',
      size: 2
    },
    {
      path: 'univercity/students',
      modificationDate: '2018-05-05',
      type: 'folder'
    },
    {
      path: 'univercity/students/certificates.pdf',
      modificationDate: '2018-02-02',
      type: 'file',
      size: 10
    },
    {
      path: 'univercity/students/scores.csv',
      modificationDate: '2018-03-03',
      type: 'file',
      size: 18.6
    },
    {
      path: 'univercity/students/bio.pdf',
      modificationDate: '2018-05-05',
      type: 'file',
      size: 18.6
    },
    {
      path: 'univercity/rules.pdf',
      modificationDate: '2019-01-01',
      type: 'file',
      size: 0.02
    }
  ];
}
