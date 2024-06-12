const i = document.querySelectorAll(".design-item .design-img i");

for (const a of i) {
    a.addEventListener("click", function (e) {
        console.log(this);
        const cnt = this.innerHTML;
        console.log(+cnt);
        this.innerHTML = " " + (+cnt + 1);
    });
}
