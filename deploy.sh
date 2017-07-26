# Remove old repo
echo "(1/7) Removing old repository"
rm -rf texasjhalak.com

# Clone new repo
echo "(2/7) Cloning new repository"
git clone https://github.com/texas-ica/texasjhalak.com &> /dev/null

# Stop NGINX
echo "(3/7) Shutting down NGINX"
sudo service nginx stop &> /dev/null

# Stop Node processes
echo "(4/7) Stopping Node.js"
sudo killall node &> /dev/null

# Set up Node server
echo "(5/7) Setting up Node.js server"
cd texasjhalak.com
npm install &> /dev/null

# Start NGINX server
echo "(6/7) Starting NGINX server"
sudo service nginx start &> /dev/null

# Start server
echo "(7/7) Starting Node.js server"
sudo nohup node app.js &> /dev/null
