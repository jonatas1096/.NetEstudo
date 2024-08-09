﻿using Banda.NetApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Banda.NetApp.Controllers
{
    public class PicturesController : Controller
    {

        public IActionResult Pictures()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
