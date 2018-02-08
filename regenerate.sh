#!/bin/bash
rm -rf generated captchas.zip
mkdir -p generated
node index.js
ls -1 generated | grep png | sed "s/^\([0-9]\)\([0-9]\)\([0-9]\)\([0-9]\)\([0-9]\).png$/sounds\/\1.wav sounds\/\2.wav sounds\/\3.wav sounds\/\4.wav sounds\/\5.wav generated\/\1\2\3\4\5.wav channels 1 rate 16k/g" | xargs -t -n 10 sox
zip -9 -r captcha-v7.zip generated
rm -rf generated
