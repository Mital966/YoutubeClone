package com.example.demo.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "user_master")
public class UserMaster {

	@Id
	@Column(name ="user_id")
	private Integer userId;
	
	@Column(name ="email")
	private String email;
	
	@Column(name ="password")
	private String password;
	
	@Column(name="created_on")
	private Date createdOn;
	
	@Column(name ="bit_deleted")
	private Integer bitDeleted;
}
