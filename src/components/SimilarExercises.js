import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import ExerciseCard from './ExerciseCard'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {targetMuscleExercises.length !== 0 ? targetMuscleExercises.slice(0, 6).map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        )):<Loader />}
      </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {equipmentExercises.length !== 0 ? equipmentExercises.slice(0, 6).map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        )):<Loader />}
      </Stack>
  </Box>
);

export default SimilarExercises;