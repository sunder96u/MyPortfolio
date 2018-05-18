using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Project1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Exercise1()
        {
            ViewBag.Message = "Bootstrap Grid 1 page.";

            return View();
        }

        public ActionResult Exercise2()
        {
            ViewBag.Message = "Bootstrap Grid 2 page.";

            return View();
        }

        public ActionResult JSExercise()
        {
            ViewBag.Message = "Your JS Exersices page.";

            return View();
        }
    }
}