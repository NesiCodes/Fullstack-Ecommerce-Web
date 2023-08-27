package com.unejsi.springbootecommerce.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Table(name="state")

@Entity
@Data
public class State {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;
}
