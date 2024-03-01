(function() {
    "text/javascript";
    // type="text/javascript">
    // document.getElementById("editBtn1").onClickBtn = function () {
    //     location.href = "users-profile.html";
    // };
    // document.getElementById("editBtn2").onClickBtn = function () {
    //     location.href = "users-profile.html";
    // };

    /* button profile details */
    class ButtonHandler {
        constructor(buttonId, targetPage) {
            this.button = document.getElementById(buttonId);
            this.targetPage = targetPage;

            // เพิ่ม Event Listener เมื่อคลิกที่ปุ่ม
            this.button.addEventListener('click', () => this.onClickBtn());
        }

        // ฟังก์ชันสำหรับการทำงานเมื่อคลิกที่ปุ่ม
        onClickBtn() {
            location.href = this.targetPage;
        }
    }

    // สร้างอ็อบเจ็กต์ ButtonHandler สำหรับแต่ละปุ่ม
    const buttonHandler1 = new ButtonHandler('editBtn1', 'users-profile.html');
    const buttonHandler2 = new ButtonHandler('editBtn2', 'users-profile.html');
    const buttonHandler3 = new ButtonHandler('editBtn3', 'users-profile.html');
    const buttonHandler4 = new ButtonHandler('editBtn4', 'users-profile.html');
    const buttonHandler5 = new ButtonHandler('editBtn5', 'users-profile.html');
    const buttonHandler6 = new ButtonHandler('editBtn6', 'users-profile.html');
    const buttonHandler7 = new ButtonHandler('editBtn7', 'users-profile.html');
    const buttonHandler8 = new ButtonHandler('editBtn8', 'users-profile.html');
    const buttonHandler9 = new ButtonHandler('editBtn9', 'users-profile.html');
    const buttonHandler10 = new ButtonHandler('editBtn10', 'users-profile.html');
})();