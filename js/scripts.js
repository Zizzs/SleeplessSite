let testamonials = [
  {
    quote:
      "As chief operating officer for a social game startup, we struggled to find quality engineering talent at affordable prices.  We had a few engineers experienced in game design, but no one able to tackle the server architectures we'd need to build a large scale social game.  Through a mutual contact we were introduced to Sleepless Software.  We found them to be responsible, cost effective and extremely good at solving the difficult engineering challenges we faced.  It was an excellent addition to our in-house staff and kept us moving forward at a critical time in our project.  I'd highly recommend them.",
    name: "Matt Cupal",
    title: "Chief Operating Officer",
    company: "Funium LLC"
  },
  {
    quote:
      "The Sleepless team truly is tireless.  After another development shop failed to meet its deadlines, the Sleepless team took over our project with a very short deadline.  Nevertheless, the entire team stayed responsive and productive for a month-long sprint to a successful application launch.  Together they produced a better product at a lower overall cost than our previous firm.",
    name: "Andrew Magliozzi",
    title: "Founder & President",
    company: "FinalsClub Inc., Veritas Tutors LLC"
  },
  {
    quote: "Outstanding work has been of tremendous value to our company",
    name: "Bruce Jones",
    title: "VP of Operations",
    company: "ExamWorks Review Services"
  },
  {
    quote: "Can trouble shoot any challenges we encounter",
    name: "Teri Yamamura",
    title: "Author",
    company: "Trinity Moon"
  },
  {
    quote:
      "Reliable, punctual, and provided out-of-the-box ideas to help us troubleshoot technical barriers.",
    name: "Shelley B. Cagle",
    title: "Technical Writer",
    company: "Blue Cross Blue Shield of North Carolina"
  },
  {
    quote:
      "Direct, no-nonsense attitude, detail oriented, and gets things done.",
    name: "Richard Bateman",
    title: "Contract Software Engineer",
    company: "Facebook"
  },
  {
    quote:
      "Knowledge of the web comes from being wrapped up in it since the beginning",
    name: "Matt Amacker",
    title: "Senior Development Engineer",
    company: "A9.com"
  },
  {
    quote:
      "All around geniuses that can handle any job and always give great results.",
    name: "Tim Webb",
    title: "Technical Designer",
    company: "Avatar Reality"
  },
  {
    quote:
      "Consistently pushes the limits of the technologies to deliver high quality results.",
    name: "Mitzi McGilvray",
    title: "VP, Casual Games",
    company: "TikGames"
  },
  {
    quote: "We love the RRT. It makes our job so much easier.",
    name: "Brigitte DeShields",
    title: "Sr. Record Review Coordinator",
    company: "ExamWorks Review Services"
  },
  {
    quote: "Approach to software engineering is highly practical.",
    name: "Matt Amacker",
    title: "Senior Development Engineer",
    company: "A9.com"
  },
  {
    quote:
      "Sleepless Software's expertise has been a great help to the Lymphatic Research Foundation.",
    name: "Jackie Reinhard",
    title: "Executive Director",
    company: "Lymphatic Research Foundation"
  },
  {
    quote:
      "Of all the programmers we've worked with you are far and beyond the best!",
    name: "William E. Hullinger",
    title: "President and CEO",
    company: "ExamWorks Review Services"
  },
  {
    quote:
      '...thank you for your generous, "in-kind" contribution of technical consulting ...',
    name: "Jeanne M. Roy, MFT",
    title: "Executive Director",
    company: "Children's Advocacy Center, Pomona"
  }
];

$(document).ready(function() {
  rotateQuotes(testamonials);
  $(".servicesLink").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#pageOne").offset().top
      },
      1000
    );
  });
  $(".clientsLink").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#pageTwo").offset().top
      },
      1000
    );
  });

  $(".aboutLink").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#pageThree").offset().top
      },
      1000
    );
  });

  $(".contactLink").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#pageFour").offset().top
      },
      1000
    );
  });

  $(document).scroll(function() {
    let y = $(this).scrollTop();
    if (y > 100) {
      $("#headerFollow").fadeIn();
    } else {
      $("#headerFollow").fadeOut();
    }
  });
});

let rotateQuotes = function(array) {
  let currentIndex = 0;
  setInterval(function() {
    $("#testamonialQuote").text(array[currentIndex].quote);
    $("#testamonialName").text(array[currentIndex].name);
    $("#testamonialTitle").text(array[currentIndex].title);
    $("#testamonialCompany").text(array[currentIndex].company);
    $("#testamonialQuote").fadeIn();
    $("#testamonialName").fadeIn();
    $("#testamonialTitle").fadeIn();
    $("#testamonialCompany").fadeIn();
    setTimeout(function() {
      $("#testamonialQuote").fadeOut();
      $("#testamonialName").fadeOut();
      $("#testamonialTitle").fadeOut();
      $("#testamonialCompany").fadeOut();
    }, 19000);
    currentIndex++;
  }, 20000);
};
