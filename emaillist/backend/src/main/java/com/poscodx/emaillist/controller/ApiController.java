package com.poscodx.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.emaillist.dto.JsonResult;
import com.poscodx.emaillist.repository.EmaillistRepository;
import com.poscodx.emaillist.vo.EmailListVo;


@RestController
public class ApiController {
   @Autowired
   private EmaillistRepository emaillistRepository;
   @GetMapping("/api")
   public ResponseEntity<JsonResult> read() {
      
      return ResponseEntity
            .status(HttpStatus.OK)
            .body(JsonResult.success(emaillistRepository.findall()));
   }
   @PostMapping("/api")
   public ResponseEntity<JsonResult> insert(@RequestBody EmailListVo emailListVo) {
       int insertedCount = emaillistRepository.insert(emailListVo);
       if (insertedCount == 1) {
           return ResponseEntity.status(HttpStatus.CREATED).body(JsonResult.success(emailListVo));
       } else {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(JsonResult.fail("Insert failed"));
       }
   }

   
   
}