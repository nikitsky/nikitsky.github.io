---
layout: post
title:  "My first post"
published: true
date:   2017-03-10 21:00:00 +0100
categories: jekyll 
excerpt_separator: <!--more-->
---
Первый абзац покажется с постом.

А это уже нет. это все из-за собаки!
<!--more-->

## Header 2
<ul>
  {% for post in site.static_files %}
    <li>
      <a href="{{ file.path }}">{{ file.name }}</a>
       {{ file.modified_time }}
    </li>
  {% endfor %}
</ul>

Table

| col |  desc |
| --- | ----- |
| 1| row 1|
|2|row 2|

Code block
```js 
var = d3.select('body');
```

{% highlight sql linenos %}
select
    DUMMY
from DUAL;
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
