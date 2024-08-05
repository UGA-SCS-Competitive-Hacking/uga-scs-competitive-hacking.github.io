(self.webpackChunkmain_website=self.webpackChunkmain_website||[]).push([[1960],{7580:(e,n,r)=>{"use strict";r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=r(216),s=r(5303),i=r(7504);const a={description:"Reverse Engineering | Easy - Pyc",tags:["easy"],sidebar_position:0},c="Pyc",o={id:"ReverseEngineering/Easy/easy-pyc",title:"Pyc",description:"Reverse Engineering | Easy - Pyc",source:"@site/docs/ReverseEngineering/Easy/easy-pyc.md",sourceDirName:"ReverseEngineering/Easy",slug:"/ReverseEngineering/Easy/easy-pyc",permalink:"/practice/ReverseEngineering/Easy/easy-pyc",draft:!1,unlisted:!1,tags:[{inline:!1,label:"Easy",permalink:"/practice/tags/easy",description:"Easy level challenges."}],version:"current",sidebarPosition:0,frontMatter:{description:"Reverse Engineering | Easy - Pyc",tags:["easy"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Easy - RE",permalink:"/practice/category/easy---re"},next:{title:"Machine Learning",permalink:"/practice/category/machine-learning"}},d={},h=[{value:"Challenge",id:"challenge",level:2},{value:"Solution",id:"solution",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pyc",children:"Pyc"}),"\n",(0,t.jsx)(n.p,{children:"Reverse Engineering | Easy - Pyc"}),"\n",(0,t.jsx)(n.h2,{id:"challenge",children:"Challenge"}),"\n",(0,t.jsx)(n.p,{children:"We have created a python script for you to break into as training. See if you can figure out a password that will authenticate with the program."}),"\n",(0,t.jsxs)(n.p,{children:["Download file: ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(2590).A+"",children:"rev.pyc"})]}),"\n",(0,t.jsx)(i.A,{hash:"b5368f3271b484d3ca35e63a102e636dc8e83e238b10b70124a2da6a51e7f8060f6bb76e748d8c0d4f9da4d2012dd5db09e2f455f4d9d95bd9ac27439d37d890",algorithm:"sha512"}),"\n",(0,t.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Solution Guide"}),(0,t.jsx)(n.p,{children:"Let's analyze this file further. This file is a .pyc file, which is a Python Compiled bytecode file. Since this is compiled, we cannot read the source code just by opening it. Try runnning the program and see what happens. We will be using a Linux terminal for this tutorial."}),(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If you have both Python 2 and Python 3 installed, you may need to specify ",(0,t.jsx)(n.code,{children:"python3"})," instead of ",(0,t.jsx)(n.code,{children:"python"}),"."]})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ python rev.pyc\n"})}),(0,t.jsxs)(n.p,{children:["After executing this, you will see that the program is asking for a password. If we try to guess a random password, we get a message of ",(0,t.jsx)(n.code,{children:"Access Denied"}),". It seems we will have to dig further with this file."]}),(0,t.jsxs)(n.p,{children:["Fortunately, there are local and online PYC decompilers. One great online tool is ",(0,t.jsx)(n.a,{href:"https://www.pylingual.io/",children:(0,t.jsx)(n.strong,{children:"PyLingual"})}),". After decompiling the PYC file, we can see the entire source code of the program."]}),(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Reveal Source Code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"def caesar_shift_encrypt(text, shift):\r\nencrypted_text = ''\r\nfor char in text:\r\n    if char.isalpha():\r\n        shifted_char = chr((ord(char) - ord('a') + shift) % 26 + ord('a'))\r\n        encrypted_text += shifted_char\r\n    else:\r\n        encrypted_text += char\r\nreturn encrypted_text\r\n\r\ndef check_password(input_password):\r\n    encrypted_password = 'yfwmjfpb'\r\n    shift = 9\r\n    encrypted_input = caesar_shift_encrypt(input_password, shift)\r\n    if encrypted_input == encrypted_password:\r\n        return 'Access Granted'\r\n    return 'Access Denied'\r\ninput_password = input('Enter the password: ')\r\nresult = check_password(input_password)\r\nprint(result)\n"})})]}),(0,t.jsxs)(n.p,{children:["Upon inspecting this python code, we can see that the script is using ",(0,t.jsx)(n.strong,{children:"Caesar Cipher"})," with a shift of ",(0,t.jsx)(n.strong,{children:"9"})," to encrypt the password and compare it against the ciphertext ",(0,t.jsx)(n.code,{children:"yfwmjfpb"}),". We can easily reverse this with a website like ",(0,t.jsx)(n.a,{href:"https://www.dcode.fr/caesar-cipher",children:"https://www.dcode.fr/caesar-cipher"})," and retrieve the password!"]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7504:(e,n,r)=>{"use strict";r.d(n,{A:()=>c});var t=r(6372),s=r(5921),i=r.n(s),a=r(216);const c=e=>{let{hash:n,algorithm:r}=e;const[s,c]=(0,t.useState)(""),[o,d]=(0,t.useState)(""),h=()=>{const e=((e,n)=>{switch(n){case"sha1":return i().SHA1(e).toString();case"sha512":return i().SHA512(e).toString();default:return e}})(s,r);d(e===n?"Correct!":"Incorrect. Try again.")};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h()},children:[(0,a.jsx)("input",{type:"text",value:s,onChange:e=>c(e.target.value),placeholder:"Enter answer"}),(0,a.jsx)("button",{type:"submit",children:"Check"})]}),(0,a.jsx)("p",{children:o})]})}},2590:(e,n,r)=>{"use strict";r.d(n,{A:()=>t});const t=r.p+"assets/files/rev-b9b6953ac08068267f00e7ce73e99335.pyc"},3936:()=>{}}]);