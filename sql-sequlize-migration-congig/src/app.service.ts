import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkServerConnection(): string {
    return `
      
      <html lang="en">
        <style>
           .server{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
               color: green;
               font-size: 24px;
               text-align: center;
           }
        </style>
        <div class="server">
          <h1>Online Shop 🛒</h1>
          <p>
            🙌 Server is running 🙌
          </p>
        </div>
      <html/>
    `;
  }
}
