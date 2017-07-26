# Remove old repo
echo "(1/8) Removing old repository"
rm -rf texasjhalak.com

# Clone new repo
echo "(2/8) Cloning new repository"
git clone https://github.com/texas-ica/texasjhalak.com &> /dev/null

# Stop NGINX
echo "(3/8) Shutting down NGINX"
sudo service nginx stop &> /dev/null

# Stop Node processes
echo "(4/8) Stopping Node.js"
sudo killall node &> /dev/null

# Set up Node server
echo "(5/8) Setting up Node.js server"
cd texasjhalak.com
npm install &> /dev/null

# Start NGINX server
echo "(6/8) Starting NGINX server"
sudo service nginx start &> /dev/null

# Set environment variables
echo "(7/8) Setting environment variables"
# TODO: fill with environment variables

# Start server
echo "(8/8) Starting Node.js server"
sudo nohup node app.js &> /dev/null
