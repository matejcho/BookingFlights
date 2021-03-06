﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BookaFlight.Data;
using BookaFlight.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Net.Http;

namespace BookaFlight.Controllers
{
    [Authorize(Roles = "Basic,SuperAdmin")]
    public class TicketsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;

        public TicketsController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;

        }
        
        // GET: Tickets
        public async Task<IActionResult> Index()
        {
            return View(await _context.Ticket.ToListAsync());
        }

        // GET: Tickets/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ticket = await _context.Ticket
                .FirstOrDefaultAsync(m => m.TicketID == id);
            if (ticket == null)
            {
                return NotFound();
            }

            return View(ticket);
        }

        // GET: Tickets/GetTicket/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Ticket>> GetTicket(int? id)
        //{
        //    var item = await _context.Ticket.FindAsync(id);
        //    if (item == null)
        //    {
        //        return NotFound();
        //    }

        //    //var ticket = await _context.Ticket
        //    //    .FirstOrDefaultAsync(m => m.TicketID == id);
        //    //if (ticket == null)
        //    //{
        //    //    return NotFound();
        //    //}

        //    return item;
        //}

        // GET: Tickets/Create
        public IActionResult Create()
        {
            List<Flight> flights = new List<Flight>();
            flights = (from flg in _context.Flight select flg).ToList();
            ViewBag.Flight = flights.Distinct();
            
            var fNum = from f in _context.Flight
                       select f.FlightNumber;
            ViewBag.FlightNumber = fNum.First().ToString();
            
            return View();
        }

        // POST: Tickets/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("TicketID,FirstName,LastName,DateOfBirth,PassportNumber,Origin,Destination,Departure,Return,FlightNumber,FreeCarryOnBag,TrolleyBag,CheckedInBag")] Ticket ticket)
        {
            var tmp = ticket.PassportNumber;
            if (ModelState.IsValid)
            {
                _context.Add(ticket);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(ticket);
        }

        // GET: Tickets/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ticket = await _context.Ticket.FindAsync(id);
            if (ticket == null)
            {
                return NotFound();
            }
            return View(ticket);
        }

        // POST: Tickets/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("TicketID,FirstName,LastName,DateOfBirth,PassportNumber,Origin,Destination,Departure,Return,FlightNumber,FreeCarryOnBag,TrolleyBag,CheckedInBag")] Ticket ticket)
        {
            if (id != ticket.TicketID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(ticket);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TicketExists(ticket.TicketID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(ticket);
        }

        // GET: Tickets/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ticket = await _context.Ticket
                .FirstOrDefaultAsync(m => m.TicketID == id);
            if (ticket == null)
            {
                return NotFound();
            }

            return View(ticket);
        }

        // POST: Tickets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var ticket = await _context.Ticket.FindAsync(id);
            _context.Ticket.Remove(ticket);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TicketExists(int id)
        {
            return _context.Ticket.Any(e => e.TicketID == id);
        }
    }
}
