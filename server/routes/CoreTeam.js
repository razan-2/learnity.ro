const express = require("express");
const router = express.Router();
const { CoreTeam } = require("../models");

router.post("/", async (req, res) => {
    const {firstName, lastName, username, password} = req.body;
})