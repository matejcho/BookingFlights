using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookaFlight.Migrations
{
    public partial class FlightsandTickets : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FlightID",
                schema: "Identity",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Flight",
                schema: "Identity",
                columns: table => new
                {
                    FlightID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Origin = table.Column<string>(nullable: false),
                    Destination = table.Column<string>(nullable: false),
                    Departure = table.Column<DateTime>(nullable: false),
                    Return = table.Column<DateTime>(nullable: false),
                    FlightNumber = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flight", x => x.FlightID);
                });

            migrationBuilder.CreateTable(
                name: "Ticket",
                schema: "Identity",
                columns: table => new
                {
                    TicketID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationUserId = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: false),
                    LastName = table.Column<string>(nullable: false),
                    DateOfBirth = table.Column<DateTime>(nullable: false),
                    PassportNumber = table.Column<string>(nullable: true),
                    Origin = table.Column<string>(nullable: false),
                    Destination = table.Column<string>(nullable: false),
                    Departure = table.Column<DateTime>(nullable: false),
                    Return = table.Column<DateTime>(nullable: false),
                    FlightNumber = table.Column<string>(nullable: false),
                    FlightID = table.Column<int>(nullable: true),
                    FreeCarryOnBag = table.Column<bool>(nullable: false),
                    TrolleyBag = table.Column<bool>(nullable: false),
                    CheckedInBag = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ticket", x => x.TicketID);
                    table.ForeignKey(
                        name: "FK_Ticket_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalSchema: "Identity",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ticket_Flight_FlightID",
                        column: x => x.FlightID,
                        principalSchema: "Identity",
                        principalTable: "Flight",
                        principalColumn: "FlightID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_FlightID",
                schema: "Identity",
                table: "AspNetUsers",
                column: "FlightID");

            migrationBuilder.CreateIndex(
                name: "IX_Ticket_ApplicationUserId",
                schema: "Identity",
                table: "Ticket",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Ticket_FlightID",
                schema: "Identity",
                table: "Ticket",
                column: "FlightID");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Flight_FlightID",
                schema: "Identity",
                table: "AspNetUsers",
                column: "FlightID",
                principalSchema: "Identity",
                principalTable: "Flight",
                principalColumn: "FlightID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Flight_FlightID",
                schema: "Identity",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Ticket",
                schema: "Identity");

            migrationBuilder.DropTable(
                name: "Flight",
                schema: "Identity");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_FlightID",
                schema: "Identity",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "FlightID",
                schema: "Identity",
                table: "AspNetUsers");
        }
    }
}
