---
sidebar_position: 3
hide_title: true
slug: /capacity
---

# Platform capabilities
## Services Offered

| computing Type | computing Services | Development Status |
| --- | --- | --- |
| Bio-data Analysis Services | EEG | Released |
|| Heart Rate | Released |
| Affective computing Services | Attention | Released |
|| Relaxation | Released |
|| Pressure | Released |
|| Arousal | Beta |


## Real-time analysis and report
The Affective Cloud provides two ways to return values: real-time analysis and statistical reports.

Real-time computing of the affective computing value allows your product to respond to the user's physical and affective state in real-time. It allows you to develop products that interact with the user in real-time, for example, by determining in real-time whether the user falls asleep to decide whether to turn off the sleep aid music or not.

Reports over a period of time can allow users to understand their physical state and affection changes over a period of time. For example, the pressure-reduction effect of meditation can be measured by analyzing the pressure level change before and after the meditation user.

### Real-time computed affective computing values

The values available for analysis are as follows.

| Computing Type | Computing Service | Optional Computing Values | Data Description |
| --- | --- | --- | --- |
| Bio-data analysis | brainwaves | Left and right channel EEG data | Raw brainwaves |
||| Brainwave Spectrum | Brainwave energy ratio in each frequency band, including alpha, beta, theta, delta, and gamma frequency bands |
||| EEG signal quality | For assessing the current signal quality |  
|| Heart Rate | Heart Rate Values | Real-Time Heart Rate |
||| Heart Rate Variability | HRV per Minute | 
| Affective computing analysis | Attention | Attention | Real-time attention
|| Relaxation | Relaxation | Real-Time Relaxation | 
|| Stress Levels | Stress Levels | Real-Time Stress Levels
|| Pleasure Level | Pleasure Level | Real-Time Pleasure Level
|| Arousal | Arousal | Real-time Arousal
||Sleep | Sleep state | Real-time determination of whether to fall asleep |
|||sleep depth| Real-time determination of sleep level |

The service will return the results in real-time. For details, please refer to the interface protocol for the relevant parameters and configuration.

### Report

After computing, you can also choose whether you want to return a report of the computing analysis results, which can be used to count all the values generated during the current session. The optional computing return results report is as follows.

| Computing Type | Computing Service | Optional Computing Values | Data Description |
| --- | --- | --- | --- |
| Bio-data analysis | brainwaves | All records of EEG variations in each frequency band | Includes alpha, beta, theta, delta, and gamma bands |
|| Heart rate | Heart rate average, heart rate maximum, heart rate minimum, and all heart rate values | Calculated from all records combined
|| HRV | Heart rate variability Average, all records | Calculated from all records combined
| Affective computing analysis | Attention | Average, all records | All Average and records |
|| Relaxation | Average, all records | All Average and records |
|| Stress level | Average, all records | All Average and records |
|| Pleasure Level | Average, All Records | All Average and Records |
|| Arousal | Average, all records | All Average and records |
|| Sleep | Sleep curves | Overall course of sleep |
||| Sleeping point | Sleeping point of time |
||| Duration statistics | Duration statistics for each sleep state |