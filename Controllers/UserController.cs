using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using validations3.Models;

namespace validations3.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(user user)
        {
            return RedirectToAction("Success");
        }
        public IActionResult Success()
        {
            return RedirectToAction("Create");
        }
    }
}
