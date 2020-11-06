import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Content} from '../helper-files/content-interface';
import {ContentListComponent} from '../content-list/content-list.component';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  public id: number;
  public author: string;
  public imgUrl: string;
  public title: string;
  public tags?: string[];
  public type: string;
  public body: string;
  public form: FormGroup;
  public invalidForm: boolean;
  constructor() {
    this.invalidForm = false;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      contentId: new FormControl(null, Validators.required),
      contentAuthor: new FormControl('', Validators.required),
      contentImgUrl: new FormControl('', Validators.required),
      contentTitle: new FormControl('', Validators.required),
      contentTags: new FormControl(''),
      contentType: new FormControl('', Validators.required),
      contentBody: new FormControl('', Validators.required)
    });
  }
  Clear(): void{
    this.form.reset();
  }
  onSubmit(): void {
    const submitPromise = new Promise((success, fail) => {
    if (this.form.valid) {
      const contentItem: Content = {
        id: this.form.value.contentId,
        author: this.form.value.contentAuthor,
        imgUrl: this.form.value.contentImgUrl,
        title: this.form.value.contentTitle,
        tags: this.form.value.contentTags,
        type: this.form.value.contentType,
        body: this.form.value.contentBody
      };
      success(`The Content ${this.form.value.contentTitle} has been successfully added`);
      this.invalidForm = false;
      ContentListComponent.contentList.push(contentItem);
      this.Clear();
    } else {
      console.log(this.form.get('contentId').status);
      console.log(this.form.get('contentAuthor').status);
      console.log(this.form.get('contentImgUrl').status);
      console.log(this.form.get('contentTitle').status);
      console.log(this.form.get('contentTags').status);
      console.log(this.form.get('contentType').status);
      console.log(this.form.get('contentBody').status);
      this.invalidForm = true;
      fail('Content could not be added');
    }
  });
    submitPromise.then(
      (success) => console.log(success),
      (fail) => console.log(fail)
    );
  }

}
