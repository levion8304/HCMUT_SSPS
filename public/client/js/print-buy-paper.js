document.addEventListener("DOMContentLoaded", () => {
    // Chọn tất cả các bộ đếm (counter)
    const counter = document.querySelector(".inner-quantity");
    const minusButton1 = counter.querySelector(".minus1");
    const plusButton1 = counter.querySelector(".plus1");
    const minusButton2 = counter.querySelector(".minus2");
    const plusButton2 = counter.querySelector(".plus2");
    const numberDisplay1 = counter.querySelector(".inner-number1");
    const numberDisplay2 = counter.querySelector(".inner-number2");
    const totalDisplay = counter.closest(".inner-content").querySelector("h5 span"); // Lấy tổng tiền
    const pricePerUnit = 1000; 

    let quantity2 = parseInt(numberDisplay2.textContent, 10); // Lấy số lượng hiện tại
    let quantity1 = parseInt(numberDisplay1.textContent, 10);

    // Cập nhật tổng tiền
    function updateTotal() {
      const total = (quantity1 + quantity2 * 5) * pricePerUnit;
      totalDisplay.textContent = `${total.toLocaleString()}đ`; // Hiển thị tổng tiền
    }

    // Xử lý khi nhấn nút -
    minusButton1.addEventListener("click", () => {
      console.log("Clicked button");
      if (quantity1 > 0) {
        quantity1 -= 1;
        numberDisplay1.textContent = quantity1;

        updateTotal(); // Cập nhật tổng tiền
      }
    });

    // Xử lý khi nhấn nút +
    plusButton1.addEventListener("click", () => {
      quantity1 += 1;
      numberDisplay1.textContent = quantity1;

      updateTotal(); // Cập nhật tổng tiền
    });

    // Xử lý khi nhấn nút -
    minusButton2.addEventListener("click", () => {
      console.log("Clicked button");
      if (quantity2 > 0) {
        quantity2 -= 1;
        numberDisplay2.textContent = quantity2;

        updateTotal(); // Cập nhật tổng tiền
      }
    });

    // Xử lý khi nhấn nút +
    plusButton2.addEventListener("click", () => {
      quantity2 += 1;
      numberDisplay2.textContent = quantity2;

      updateTotal(); // Cập nhật tổng tiền
    });
  
    const counter2 = document.querySelector(".inner-below");
    const confirmButton = counter2.querySelector(".confirm-button");
    // const newButton = confirmButton.cloneNode(true); // Tạo một nút mới thay thế nút cũ
    // confirmButton.replaceWith(newButton);

    confirmButton.addEventListener('click', () => {
      // Thu thập thông tin từ form
      console.log("Clicked button checked");
      
      // Lấy trạng thái đồng ý với điều khoản
      const agreeTerms = document.getElementById("agree").checked;
      
      // Lấy thông tin phương thức thanh toán
      let selectedPayment = null;
      if (document.getElementById("momo").checked) {
        selectedPayment = ("MOMO"); // Gán giá trị cụ thể (ví dụ: ID hoặc tên phương thức thanh toán)
      } else if (document.getElementById("vnpay").checked) {
        selectedPayment = ("VNPAY");
      } else if (document.getElementById("bkpay").checked) {
        selectedPayment = ("BKPAY");
      }


      const totalPrice = 100; // Giả sử giá trị total_price cố định
  
      // Kiểm tra xem các trường bắt buộc đã được chọn chưa
      if (!selectedPayment) {
        alert('Vui lòng chọn phương thức thanh toán!');
        return;
      }
      if (!agreeTerms) {
        alert('Vui lòng đồng ý với Điều khoản & Điều kiện!');
        return;
      }
  
      // Tạo object dữ liệu để gửi
      const requestData = {
        num1: quantity1,
        num2: quantity2,
        payment_method: selectedPayment,
        agree_terms: agreeTerms,
        total_price: (quantity1 + quantity2 * 5) * pricePerUnit,
        totalpage: quantity1 + quantity2 * 5,
      };
      console.log(requestData)

      const queryParams = new URLSearchParams(requestData).toString();
      window.location.href = '/checkout/buy-paper/?' + queryParams;
      //  window.location.href = '/checkout/buy-paper/'
  
      // Gửi POST request tới server
      // console.log(JSON.stringify(requestData));
      // fetch('/print/buy-paper/post-Buypaper', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(requestData),
      // })
      // .then((response) => response.json())  // Chắc chắn nhận phản hồi từ server dưới dạng JSON
      // .then((data) => {
      //   // Điều hướng đến trang mới nếu thành công
      //   // alert('Đơn hàng của bạn đã được xác nhận!');
      //   console.log('Server response:', data);
      //   // Chuyển hướng tới trang mua giấy
      //   window.location.href = '/checkout/buy-paper/';  // Hoặc URL mà bạn muốn chuyển hướng đến
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      //   alert('Có lỗi xảy ra, vui lòng thử lại sau!');
      // });
    });
    

  });
  