import { Component, inject, OnInit } from '@angular/core';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public files: NgxFileDropEntry[] = [];

  variable = 23;
  fileFound: boolean = false;
  fileUploading: boolean = true;
  subscriber: Subscription;

  // in() {
  //   const stream: Observable<number> = interval(5);
  //   this.subscriber = stream.subscribe((res) => {
  //     //console.log(res);
  //     this.variable = res;

  //     if (res === 100) {
  //       this.subscriber.unsubscribe();
  //     }
  //   });
  // }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    this.variable = 23;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        //this.in();
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          this.fileFound = true;

          setTimeout(() => {
            this.variable = 100;
            this.fileUploading = false;
          }, 1000);
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: Event) {
    console.log(event);
  }

  public fileLeave(event: Event) {
    console.log(event);
  }
}
