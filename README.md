
# 좌표를 찾아라

-   사용언어 : JAVASCRIPT, HTML ,CSS

마우스를 이용해 좌표찾기

<img src="https://user-images.githubusercontent.com/62421526/89705265-e8aa0600-d996-11ea-96a2-e236baa63be2.png" style="width:500px">


마우스가 이동함에 따라 마우스의 좌표가 나타난다


## 문제점과 해결

top과 left를 이용해서 좌표를 그리는 방법을 이용하면 layout, paint, composition 모두가 변경되는 일이 발생한다.
즉, 비효율적으로 css를 이용하게 된다. layout을 새로 그리면서 발생하게 된다.

해결방법 !

가장 최선의 변경이 일어나도록 css를 변경해야한다
