// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

(function() {
"use strict";
  
  module.exports = {
  
    // Replace with your own subscription key, service region (e.g., "westus"),
    // and recognition language.
    subscriptionKey:   "ed20b21c-1508-4066-b391-3e1afae0527f",
    serviceRegion:     "eastus", // e.g., "westus"
    language:          "en-US",
  
    // Replace with the full path to a wav file you want to recognize or overwrite.
    filename:          "YourAudioFile.wav", // 16000 Hz, Mono
  
    // Replace with your own Language Understanding subscription key (endpoint
    // key), region, and app ID in case you want to run the intent sample.
    luSubscriptionKey: "ed20b21c-1508-4066-b391-3e1afae0527f",
    luServiceRegion:   "westus",
    luAppId:           "ac456445-4392-4ba1-9918-3451804e7ee0",
  };
  }());
    
