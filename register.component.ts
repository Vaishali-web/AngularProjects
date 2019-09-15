import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  users = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    idproof1: "",
    idproof2: "",
    idproof3: "",
    password: "",
    retypepassword: ""
  };
  proof: string;
  fileList: FileList;

  fileChange(event) {
    this.fileList = event.target.files;
  }

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.proof = "";
  }

  proofChange(p) {
    this.proof = p.target.value;
  }

  validate(f, users) {
    console.log(this.users);
    if (f.valid) {
      if (this.fileList.length > 0) {
        let file: File = this.fileList[0];
        var formData: FormData = new FormData();
        formData.append("uploadFile", file, file.name);
        formData.append("data", JSON.stringify(this.users));
      }

      this.apiService.register(formData).subscribe(
        data => {
          if (data == "success") {
            this.apiService.messageDialog("Successfully registered");
            setTimeout(function() {
              location.href = "/login";
            }, 3000);
          } else {
            this.apiService.messageDialog("Error! Check your inputs.");
          }
        },
        error => {
          this.apiService.messageDialog(
            "Error registering user. Try after sometime"
          );
        }
      );
    } else {
      this.apiService.messageDialog("Invalid data. Check Fields");
    }
  }
}
