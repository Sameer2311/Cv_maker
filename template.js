window.addEventListener('load', () => {

    const name = sessionStorage.getItem('name');
    const des = sessionStorage.getItem('des');

    const address = sessionStorage.getItem('address');
    const emailid = sessionStorage.getItem('emailid');
    const phonenumber = sessionStorage.getItem('phonenumber');

    const aboutyourself = sessionStorage.getItem('aboutyourself');

    const twitterhandle = sessionStorage.getItem('twitterhandle');
    const linkdin = sessionStorage.getItem('linkdin');
    const github = sessionStorage.getItem('github');

    const pro1 = sessionStorage.getItem('pro1');
    const pro2 = sessionStorage.getItem('pro2');
    const pro3 = sessionStorage.getItem('pro3');
    const pro4 = sessionStorage.getItem('pro4');

    const s1 = sessionStorage.getItem('s1');
    const s2 = sessionStorage.getItem('s2');
    const s3 = sessionStorage.getItem('s3');
    const s4 = sessionStorage.getItem('s4');

    const schoolname = sessionStorage.getItem('schoolname');
    const schooltimeline = sessionStorage.getItem('schooltimeline');
    const aboutschool = sessionStorage.getItem('aboutschool');

    const collagename = sessionStorage.getItem('collagename');
    const collagetimeline = sessionStorage.getItem('collagetimeline');
    const aboutcollage = sessionStorage.getItem('aboutcollage');

    const ex1des = sessionStorage.getItem('ex1des');
    const ex1timeline = sessionStorage.getItem('ex1timeline');
    const ex1company = sessionStorage.getItem('ex1company');

    const ex2des = sessionStorage.getItem('ex2des');
    const ex2timeline = sessionStorage.getItem('ex2timeline');
    const ex2company = sessionStorage.getItem('ex2company');

    const ex3des = sessionStorage.getItem('ex3des');
    const ex3timeline = sessionStorage.getItem('ex3timeline');
    const ex3company = sessionStorage.getItem('ex3company');

    const i1 = sessionStorage.getItem('i1');
    const i2 = sessionStorage.getItem('i2');
    const i3 = sessionStorage.getItem('i3');
    const i4 = sessionStorage.getItem('i4');

    document.getElementById('result-i1').innerHTML=i1;
    document.getElementById('result-i2').innerHTML=i2;
    document.getElementById('result-i3').innerHTML=i3;
    document.getElementById('result-i4').innerHTML=i4;

    document.getElementById('result-name').innerHTML=name;
    document.getElementById('result-des').innerHTML=des;

    document.getElementById('result-address').innerHTML=address;
    document.getElementById('result-emailid').innerHTML=emailid;
    document.getElementById('result-phonenumber').innerHTML=phonenumber;

    document.getElementById('result-aboutyourself').innerHTML=aboutyourself;

    document.getElementById('result-twitterhandle').innerHTML=twitterhandle;
    document.getElementById('result-linkdin').innerHTML=linkdin;
    document.getElementById('result-github').innerHTML=github;

    document.getElementById('result-pro1').innerHTML=pro1;
    document.getElementById('result-pro2').innerHTML=pro2;
    document.getElementById('result-pro3').innerHTML=pro3;
    document.getElementById('result-pro4').innerHTML=pro4;

    document.getElementById('result-s1').innerHTML=s1;
    document.getElementById('result-s2').innerHTML=s2;
    document.getElementById('result-s3').innerHTML=s3;
    document.getElementById('result-s4').innerHTML=s4;

    document.getElementById('result-schoolname').innerHTML=schoolname;
    document.getElementById('result-schooltimeline').innerHTML=schooltimeline;
    document.getElementById('result-aboutschool').innerHTML=aboutschool;

    document.getElementById('result-collagename').innerHTML=collagename;
    document.getElementById('result-collagetimeline').innerHTML=collagetimeline;
    document.getElementById('result-aboutcollage').innerHTML=aboutcollage;
   
    document.getElementById('result-ex1des').innerHTML=ex1des;
    document.getElementById('result-ex1timeline').innerHTML=ex1timeline;
    document.getElementById('result-ex1company').innerHTML=ex1company;

    document.getElementById('result-ex2des').innerHTML=ex2des;
    document.getElementById('result-ex2timeline').innerHTML=ex2timeline;
    document.getElementById('result-ex2company').innerHTML=ex2company;

    document.getElementById('result-ex3des').innerHTML=ex3des;
    document.getElementById('result-ex3timeline').innerHTML=ex3timeline;
    document.getElementById('result-ex3company').innerHTML=ex3company;
    
    })
let inpfile = document.getElementById('inpfile');
let userIcon = document.getElementById('userIcon');
let upload = document.getElementById('upload');

userIcon.addEventListener("click", function() {
    inpfile.click();
});

inpfile.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        console.log(file);
        userIcon.style.display = "block";
        reader.addEventListener("load", function() {
            userIcon.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);

    } else {
        userIcon.setAttribute("src", "/assets/img/user.png");

    }
});