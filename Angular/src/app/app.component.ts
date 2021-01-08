import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public slides = [
    { src: "https://images.pexels.com/photos/4442181/pexels-photo-4442181.jpeg?cs=srgb&dl=pexels-nadi-lindsay-4442181.jpg&fm=jpg" },
    { src: "https://images.pexels.com/photos/5312333/pexels-photo-5312333.jpeg?cs=srgb&dl=pexels-frank-cone-5312333.jpg&fm=jpg" },
    { src: "https://images.pexels.com/photos/5770047/pexels-photo-5770047.jpeg?cs=srgb&dl=pexels-eva-elijas-5770047.jpg&fm=jpg" },
    { src: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?cs=srgb&dl=pexels-josh-sorenson-1714208.jpg&fm=jpg"}
  ];
}
