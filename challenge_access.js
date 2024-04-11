function getCurrentChallenge() {
    const completedChallenges = parseInt(localStorage.getItem("completedChallenges") || "0");
    return completedChallenges + 1; // Assuming challenges start from 1
  }
  
  function hasAccessToChallenge(currentChallenge) {
    const challengeAccessKey = `challenge${currentChallenge}Access`;
    return !hasCompletedToday(challengeAccessKey);
  }
  