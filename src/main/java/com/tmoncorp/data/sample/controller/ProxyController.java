package com.tmoncorp.data.sample.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URL;

@RestController
public class ProxyController {

    private final ObjectMapper mapper = new ObjectMapper();

    @RequestMapping(value = "/proxy/api/json")
    public JsonNode getProxy(String url) throws Exception {
        return mapper.readTree(new URL(url));
    }
}
