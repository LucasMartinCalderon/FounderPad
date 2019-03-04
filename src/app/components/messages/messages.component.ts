import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  currentProfile = 'Patrick';

  currentConversation: any;

  conversations = [
    {
      author: 'Tanguy',
      messages: [
        {
          author: 'Tanguy',
          content: 'Hey',
          time: '11:00'
        },
        {
          author: 'Patrick',
          content: 'Hey',
          time: '11:12'
        },
        {
          author: 'Tanguy',
          content: 'Hey',
          time: '11:56'
        },
        {
          author: 'Patrick',
          content: 'Hey',
          time: '13:34'
        },
        {
          author: 'Tanguy',
          content: 'Hey',
          time: '11:56'
        },
        {
          author: 'Patrick',
          content: 'Hey',
          time: '13:34'
        }
      ],
      unread: 0
    },
    {
      author: 'Andrew',
      messages: [
        {
          author: 'Andrew',
          content: 'Hey',
          time: '11:00'
        },
        {
          author: 'Patrick',
          content: 'Hey',
          time: '11:12'
        },
        {
          author: 'Andrew',
          content: 'Hey',
          time: '11:56'
        },
        {
          author: 'Patrick',
          content: 'Hey',
          time: '13:34'
        }
      ],
      unread: 3
    },
    {
      author: 'Lucas',
      messages: [
        {
          author: 'Lucas',
          content: 'Hey',
          time: '11:00'
        },
        {
          author: 'Patrick',
          content: 'Hey',
          time: '11:12'
        }
      ],
      unread: 1
    }
  ];

  constructor() { }

  ngOnInit() {
    this.changeConversation(this.conversations[0]);
  }

  changeConversation(conversation: any) {
    this.currentConversation = conversation;
  }

}
