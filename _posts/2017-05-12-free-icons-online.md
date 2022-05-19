---
layout:     post
title:      Free icons on-line
published:  true
date:       2017-05-12
summary:    get an icons directly into your HTML just by writing the img tag
categories: webdev
---
<link href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css" rel="stylesheet">

> Update on 19.05.2022  
> Looks like it is not working in the desctibed way

I get service [omg-img](https://img.icons8.com) which can supply you with tonn of icons in a very simple way: 
just insert the ```<img>``` tag directly into your HTML. Icons8 will find the matching icon and generate it in the right style, size, and color.

### Example

| code | result |
| :--- | ---: |
| &lt;img src="https://img.icons8.com/search">| <img src="https://img.icons8.com/search"> |
| &lt;img src="https://img.icons8.com/monitor/ff0000">| <img src="https://img.icons8.com/monitor/ff0000"> |
| &lt;img src="https://img.icons8.com/identity_card/color">| <img src="https://img.icons8.com/identity_card/color"> |
| &lt;img src="https://img.icons8.com/password/nolan">| <img src="https://img.icons8.com/password/nolan"> |

### There are few styles are available:

<table border="0">
    <tr>
    <td align="center"><img src="https://img.icons8.com/pic"><br>default</td>
    <td align="center"><img src="https://img.icons8.com/pic/ios"><br>ios</td>
    <td align="center"><img src="https://img.icons8.com/pic/color"><br>color</td>
    <td align="center"><img src="https://img.icons8.com/pic/dusk"><br>dusk</td>
    </tr>
    <tr>
    <td align="center"><img src="https://img.icons8.com/pic/dotty"><br>dotty</td>
    <td align="center"><img src="https://img.icons8.com/pic/nolan"><br>nolan</td>
    <td align="center"><img src="https://img.icons8.com/pic/office"><br>office</td>
    <td align="center"><img src="https://img.icons8.com/pic/ultraviolet"><br>ultraviolet</td>
    </tr>
    <tr>
    <td align="center"><img src="https://img.icons8.com/pic/win"><br>win</td>
    <td align="center"><img src="https://img.icons8.com/pic/win8"><br>win8</td>
    <td align="center"><img src="https://img.icons8.com/pic/material"><br>material</td>
    <td align="center"><img src="https://img.icons8.com/pic/android"><br>android</td>
    </tr>
</table>

just add the style after the icon name. 

<span class="red"> And be careful, the same icon name could be presented by different pictures in diferent styles: </span>  
<div class="clearfix">
    <div class="col col-5 center align-bottom">
        https://img.icons8.com/firewall/office<br>
        <img src="https://img.icons8.com/firewall/office">
    </div>
<div class="col col-2 center align-middle">
<span class="red">vs</span>
</div>
<div class="col col-5 center align-bottom">
       https://img.icons8.com/firewall/nolan<br>
       <img src="https://img.icons8.com/firewall/nolan">
    </div>
</div>

### Additional options

| option | url | result |
| :----  | :--- | -----: |
|icon color | https://img.icons8.com/firewall/ff0000 | <img src="https://img.icons8.com/firewall/ff0000"> |
|icon size | https://img.icons8.com/firewall/16 | <img src="https://img.icons8.com/firewall/16"> |
|size and color | https://img.icons8.com/firewall/ff0000/24 | <img src="https://img.icons8.com/firewall/ff0000/24"> |

### Catalogue 
You can search over available icons using [icons8 web application](https://icons8.com/web-app) 

### Decoupling 
Nobody knows how long [omg-img](https://img.icons8.com) will work and sullply free icons. But you can be protected if do some manual work.
Thanks to [icons8 web application](https://icons8.com/web-app), it's possible to get icons converted to data uri. Press <span class="bg-light-gray">Generate HTML</span> and grab the code.
<!-- Copy to Clipboard icon by Icons8 -->
<img class="icon icons8-Copy-to-Clipboard" width="48" height="48" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAeNJREFUaAXtWTtOxDAQZREFNPQ0SLkBN6DmLByAO1HRIUoOQLOcBBpKmMcm6OlhZ2wnWSeSRxqt7Tef50/iiXZ3Ml0uLMSt6V2viPjc66v9fmFgrXJlxN5NvyMKDDarlHNj9WYaIz+Mwwa2q5N7YzSQ9H5hexS5tiwPpntTj5TiT+Zz0yvaint95ERucCiSzrw+Tb1EMZwTox2z88bBAVyy5dE8vOBj+FwTQA5wyZYP8xgj6GFTjxDHB5ck2ZEVArAwhnHF2bak7cVXPJjjNDi6ocE2gdqbdZZBIOlMZsSbxbQdoVmWcUKQtgMTFm8W17YDsoyoh4ZqVqB/ZYriXt+tVrkWKSkbOmPA1awS8uKn4tFq1QughLSv1aziXvwcPFitegGUkPa1mlXci5+D/1WrfLsiAAtjPL5Uuyh/ewsttR2pcTe/AznVqLcoRWfYC0p4MP7md6BNgLa4SnPOZ2DpeyMYvx2hKueGkm5+B/gZQJl6SZPT9y5BizfBRUX5/D4TvAMv6lGxX8SlM8L8QYIZ19DYB4tyCa4vfxKqw9L9vTEa+4ND8wcn0AbbCrQVKF+BKh/1fA+UUz94Fr27C5MukkvvEeXmvQZT8dg9ofmK+nyPaIBUgoOd+nv3hNq3/lFW4Aed01trhegtQwAAAABJRU5ErkJggg==">

### Thanks
**Icons8** asks to insert the link [Icon pack by Icons8](https://icons8.com) somewhere on the page. I'm doing it with pleasure! Here it is!   

<img src="http://png.icons8.com/twitter/color/24"> [@icons_8](https://twitter.com/icons_8) Thank you for the great job!

