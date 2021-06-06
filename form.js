function handleSubmit() {
    const name = document.getElementById('name').value;
    const des = document.getElementById('des').value;
   
    const address = document.getElementById('address').value;
    const emailid = document.getElementById('emailid').value;
    const phonenumber = document.getElementById('phonenumber').value;
    
    const aboutyourself = document.getElementById('aboutyourself').value;
    
    const twitterhandle = document.getElementById('twitterhandle').value;
    const linkdin = document.getElementById('linkdin').value;
    const github = document.getElementById('github').value;
   
    const pro1 = document.getElementById('pro1').value;
    const pro2 = document.getElementById('pro2').value;
    const pro3 = document.getElementById('pro3').value;
    const pro4 = document.getElementById('pro4').value;

    const s1 = document.getElementById('s1').value;
    const s2 = document.getElementById('s2').value;
    const s3 = document.getElementById('s3').value;
    const s4 = document.getElementById('s4').value;
    
    const schoolname = document.getElementById('schoolname').value;
    const schooltimeline = document.getElementById('schooltimeline').value;
    const aboutschool = document.getElementById('aboutschool').value;
   
    const collagename = document.getElementById('collagename').value;
    const collagetimeline = document.getElementById('collagetimeline').value;
    const aboutcollage = document.getElementById('aboutcollage').value;
    
    const ex1des = document.getElementById('ex1des').value;
    const ex1timeline = document.getElementById('ex1timeline').value;
    const ex1company = document.getElementById('ex1company').value;
    
    const ex2des = document.getElementById('ex2des').value;
    const ex2timeline = document.getElementById('ex2timeline').value;
    const ex2company = document.getElementById('ex2company').value;
   
    const ex3des = document.getElementById('ex3des').value;
    const ex3timeline = document.getElementById('ex3timeline').value;
    const ex3company = document.getElementById('ex3company').value;

    const i1= document.getElementById('i1').value;
    const i2= document.getElementById('i2').value;
    const i3= document.getElementById('i3').value;
    const i4= document.getElementById('i4').value;

    sessionStorage.setItem("i1", i1);
    sessionStorage.setItem("i2", i2);
    sessionStorage.setItem("i3", i3);
    sessionStorage.setItem("i4", i4);


    sessionStorage.setItem("name", name);
    sessionStorage.setItem("des", des);

    sessionStorage.setItem("address", address);
    sessionStorage.setItem("emailid", emailid);
    sessionStorage.setItem("phonenumber", phonenumber);

    sessionStorage.setItem("aboutyourself", aboutyourself);

    sessionStorage.setItem("twitterhandle", twitterhandle);
    sessionStorage.setItem("linkdin", linkdin);
    sessionStorage.setItem("github", github);

    sessionStorage.setItem("pro1", pro1);
    sessionStorage.setItem("pro2", pro2);
    sessionStorage.setItem("pro3", pro3);
    sessionStorage.setItem("pro4", pro4);

    sessionStorage.setItem("s1", s1);
    sessionStorage.setItem("s2", s2);
    sessionStorage.setItem("s3", s3);
    sessionStorage.setItem("s4", s4);

    sessionStorage.setItem("schoolname", schoolname);
    sessionStorage.setItem("schooltimeline", schooltimeline);
    sessionStorage.setItem("aboutschool", aboutschool);

    sessionStorage.setItem("collagename", collagename);
    sessionStorage.setItem("collagetimeline", collagetimeline);
    sessionStorage.setItem("aboutcollage", aboutcollage);

    sessionStorage.setItem("ex1des", ex1des);
    sessionStorage.setItem("ex1timeline", ex1timeline);
    sessionStorage.setItem("ex1company", ex1company);

    sessionStorage.setItem("ex2des", ex2des);
    sessionStorage.setItem("ex2timeline", ex2timeline);
    sessionStorage.setItem("ex2company", ex2company);

    sessionStorage.setItem("ex3des", ex3des);
    sessionStorage.setItem("ex3timeline", ex3timeline);
    sessionStorage.setItem("ex3company", ex3company);

    return;

}