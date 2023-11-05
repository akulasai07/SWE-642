package edu.gmu.swe642.hw3.repository;

import edu.gmu.swe642.hw3.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyRepository extends JpaRepository<Survey, Long> {
}
