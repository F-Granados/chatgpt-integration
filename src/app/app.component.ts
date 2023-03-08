import { Component, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from "openai";
import { ChatgptService } from './services/chatgpt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'chatgpt-integration';
  resGPT = '';
  prompt = '';
  enviando: boolean = false;

  constructor(private gpt:ChatgptService) {
    
  }
   configuration = new Configuration({
   
    apiKey: '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',
});

ngOnInit(){
  const openai = new OpenAIApi(this.configuration);
  const response = openai.listEngines();
  //console.log('resp', response);


  
}

consultar(argumento: string){
  this.enviando = true;
  this.resGPT = '';
  this.gpt.gptTest(argumento).subscribe((resp: any ) => {
    console.log('resp', resp);
    this.resGPT = resp.choices[0].text;
  })
}


}
