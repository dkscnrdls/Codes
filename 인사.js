<!DOCTYPE html>
<html>

<body>
  resultElement.innerText = number;
  <h1>떡상 가즈아!!!</h1>

  <button onclick="doAction()">떡상하기</button>

  <script>
    function doAction() {
      alert("12% 떡상하였습니다.")
      number = parseInt(number) + 12;
      wait(10)
      alert("6% 나락하였습니다ㅋ.")
      number = parseInt(number) + 6;
    }  
  </script>
</body>

</html>
