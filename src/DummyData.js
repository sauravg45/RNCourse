import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';

 export   const data= [{
        "id":"2234",
        "imageURL": "www.sadfs.com",
        "title":"I am new to this field worked for 7 months in MNC, want to know how's the PM work in start-up",
        "description": "Can some one of you here share your experience of working in start-ups, what type of problem are you solving. If you want to switch to other field what it would be",
        "upVotes":37,
        "downVotes":4,
        "username":"IamPM_Noob",
        "userDesignation":"Narayan",
        "tag":"discussion",
        "commentCount":14
    },
    {
        "id":"223ds4",
        "imageURL": "www.sadfs.com",
        "title":"Found out a good article related to churn-rate. Read it and give it your thoughts",
        "description": "Article is published on medium by saurabh meena. Link - https://medium.com/@malvikat/a-complete-guide-to-customer-churn-rate-fa6ec09d96d",
        "upVotes":17,
        "downVotes":2,
        "username":"harshit_mishra",
        "userDesignation":"Brahma",
        "tag":"resource",
        "commentCount":21
    },
    {
        "id":"223dqa4",
        "imageURL": "www.sadfs.com",
        "title":"I am shivani srivastatava, Lead PM at swiggy. Shoot your questions",
        "description": "I have been in Indian startup ecosystem for 8 yrs. Worked with Qualcomm and khatabook. Comment your question, I will give answer tonight 9 PM ",
        "upVotes":17,
        "downVotes":2,
        "username":"shivani_srivastava",
        "userDesignation":"shiva",
        "tag":"IamA",
        "commentCount":21
    },
    {
        "id":"223d7qa4",
        "imageURL": "www.sadfs.com",
        "title":"Hi PMs, I am in 4th yr IIT Kharagpur. I want job in Product Role",
        "description": "Placement is after 4 months from now. Which resources should I pick up for cracking interview. What all basics should I know? And Companies here in placement don't come for product role much. How I can apply outside and start giving interviews",
        "upVotes":27,
        "downVotes":2,
        "username":"collegePM",
        "userDesignation":"Narayna",
        "tag":"Learning",
        "commentCount":61
    }
 ]

