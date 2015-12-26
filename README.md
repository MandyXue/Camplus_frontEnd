# 写给后端整合

## 文件目录问题

1. 保持引用的文件目录结构不变
2. html改jsp的问题：
	1. 在开头添加如下标签，用以标识，并引用jstl：
	```html
	<%@ page contentType="text/html;charset=UTF-8" language="java" %>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	```
	2. 在head部分加入如下jstl标签：
	```html
	<c:set var="bp" value="${pageContext.request.contextPath}"/>
	```
	3. 在每个链接里都加入${bp}的引用，例如：
	```html
	<link href="${bp}/external/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	```
3. 建议jsp封装，将jsp放在```web/WEB-INF```目录中，不要直接调用.jsp
	目录结构可参考：[iTrip](https://github.com/MandyXue/itrip_v2.0)

## 导航栏

1. 完成链接
2. 导航栏右边的session获取判断问题，代码示例：
	```html
	<!-- get session -->
    <c:set value="${sessionScope.get('userId')}" var="user"></c:set>
    <c:if test="${user!=null}">
        <ul class="nav navbar-right">
            ...
        </ul>
    </c:if>
    <!-- no session -->
    <c:if test="${user==null}">
        <ul class="nav navbar-nav navbar-nav-right">
            <button type="button" onclick="signup()" class="btn btn-signup navbar-btn">Sign
                up
            </button>
            <button type="button" onclick="signin()" class="btn btn-signin navbar-btn">Sign
                in
            </button>
        </ul>
    </c:if>
	```

## Glyphicons 字体图标问题、图片显示问题等

解决方案：在```web/WEB-INF/web.xml```中添加映射：
	```xml
	<servlet-mapping>
	    <servlet-name>default</servlet-name>
	    <url-pattern>*.svg</url-pattern>
	</servlet-mapping>
	```
可参考：[iTrip/web.xml](https://github.com/MandyXue/itrip_v2.0/blob/master/web/WEB-INF/web.xml)

----
未完待续……