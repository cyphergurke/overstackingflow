module.exports = {
    apps : [{
      name: "overstackingflow",
      script: "npm",
      args: "start",
      watch: true,
      env: {
        "PORT": 3000,
        "NODE_ENV": "production"
      }
    }]
  };