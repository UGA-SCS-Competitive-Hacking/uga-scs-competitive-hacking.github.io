---
description: Password Cracking | Easy - RockYou
tags: [easy]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm';

# Easy - RockYou
Password Cracking | Easy - RockYou
## Challenge
A password hash was retrieved that needs to be cracked. We have received intel that the password is from the RockYou breach.

Hash: `1a3dff6f600d9fd62f8ead361480cc61`

<PasswordForm hash="8dd4bff6e1f530bfca70d85f200d29c23f85f29e4df83fffbe734587388bed8266dcda49f7f7c25ab84cb4e204b666c476d09aaee6bfc73552e625a787150701" algorithm="sha512" />

## Solution
<details>
  <summary>Solution Guide</summary>
  
  This challenge involves a popular list of leaked passwords from the RockYou breach. This list is preinstalled in Kali Linux (`/usr/share/wordlists/rockyou.txt.gz`) but can also be downloaded [**here**](https://weakpass.com/wordlist/90).
  :::tip
  You don't need to unzip `rockyou.txt.gz`.
  :::

  Our first step is to identify the hash type. This can be done with an online tool such as https://hashes.com/en/tools/hash_identifier. After submitting the hash here, we can see that it is identified as an **MD5** hash.

  Our next step is to crack the hash. We will use a tool called **Hashcat** for this which is preinstalled in Kali Linux but can also be downloaded [**here**](https://hashcat.net/hashcat/). For the purpose of this tutorial, we will be using Kali Linux.

  Hashcat supports many hash modes, denoted by a numerical ID. We know our hash is MD5 so we just need to find the hash mode ID for it. We can find that [**here**](https://hashcat.net/wiki/doku.php?id=example_hashes). Upon searching for MD5 here (it's the first one), we can see the hash mode is `0`. 

  Our next step is to choose an attack type. Since we already have a password list (`rockyou.txt`), we will use a **Dictionary Attack**. The ID for this is attack type is `0`.
  :::info
  You can learn more about hashcat's attack modes [**here**](https://hashcat.net/wiki/doku.php?id=hashcat) (scroll to the bottom).
  :::

  Now we can craft our command to crack the password. The format of a hashcat attack is:
  ```bash
  hashcat -a <attack-mode> -m <hash-mode> [hash] [other_options_like_dictionary]
  ```
  I encourage you to craft the command yourself.

  <details>
    <summary>Reveal Command</summary>
    
      ```bash
      hashcat -a 0 -m 0 1a3dff6f600d9fd62f8ead361480cc61 /usr/share/wordlists/rockyou.txt.gz
      ```
  </details>

  After executing this command, hashcat will start cracking the hash by hashing every single password in the dictionary and comparing with our hash. This may take a few minutes but after a while, we should see our hash cracked!

</details>