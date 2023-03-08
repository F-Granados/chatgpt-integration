import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

    headers =  new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    })
  constructor( private http: HttpClient) { }

  gptTest(prompt: string){
    return this.http.post(' https://api.openai.com/v1/completions', {"model": "text-davinci-003", "prompt": prompt, "temperature": 0, "max_tokens": 2048}, {headers: this.headers})
  }
}
